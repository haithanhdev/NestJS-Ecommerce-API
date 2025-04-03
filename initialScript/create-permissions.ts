import { NestFactory } from '@nestjs/core'
import { AppModule } from 'src/app.module'
import { HTTPMethod, RoleName } from 'src/shared/constants/role.constants'
import { PrismaService } from 'src/shared/services/prisma.service'

const prisma = new PrismaService()
async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(3000)

  const server = app.getHttpServer()
  const router = server._events.request._router
  const permissionsInDb = await prisma.permission.findMany({
    where: {
      deletedAt: null,
    },
  })
  const availableRoutes: { path: string; method: keyof typeof HTTPMethod; name: string; module: string }[] =
    router.stack
      .filter((layer) => layer.route)
      .map((layer) => {
        const path = layer.route.path
        const method = Object.keys(layer.route.methods)[0].toUpperCase() as keyof typeof HTTPMethod
        const moduleName = String(path.split('/')[1]).toUpperCase()
        return {
          path,
          method,
          name: method + ' ' + path,
          module: moduleName,
        }
      })
  //Tạo object permissionInDbMap với key là [method-path]
  const permissionsInDbMap: Record<string, (typeof permissionsInDb)[0]> = permissionsInDb.reduce((acc, item) => {
    acc[`${item.method}-${item.path}`] = item
    return acc
  }, {})
  //Tao object availableRoutesMap với key là [method-path]
  const availableRoutesMap: Record<string, (typeof availableRoutes)[0]> = availableRoutes.reduce((acc, item) => {
    acc[`${item.method}-${item.path}`] = item
    return acc
  }, {})
  //Tim permission trong database ma khong ton tai trong availableRoutes
  const permissionsToDelete = permissionsInDb.filter((item) => {
    return !availableRoutesMap[`${item.method}-${item.path}`]
  })
  if (permissionsToDelete.length > 0) {
    const deleteResult = await prisma.permission.deleteMany({
      where: {
        id: {
          in: permissionsToDelete.map((item) => item.id),
        },
      },
    })
    console.log('Deleted permissions', deleteResult.count)
  } else {
    console.log('No permissions to delete')
  }
  //Tim routes ma khong ton tai trong permissionsInDb
  const routesToAdd = availableRoutes.filter((item) => {
    return !permissionsInDbMap[`${item.method}-${item.path}`]
  })
  //Them routes moi vao database
  if (routesToAdd.length > 0) {
    const createResult = await prisma.permission.createMany({
      data: routesToAdd,
      skipDuplicates: true,
    })
    console.log('Created permissions', createResult.count)
  } else {
    console.log('No permissions to add')
  }
  //Xoa permission trong database
  //Them vao DB
  //   const result = await prisma.permission.createMany({
  //     data: availableRoutes,
  //     skipDuplicates: true,
  //   })

  //Lay lai permissions trong database sau khi them moi (hoac bi xoa)
  const updatedPermissionsInDb = await prisma.permission.findMany({
    where: {
      deletedAt: null,
    },
  })
  //cap nhat lai cac permissions trong Admin Role
  const adminRole = await prisma.role.findFirstOrThrow({
    where: {
      name: RoleName.Admin,
      deletedAt: null,
    },
  })
  await prisma.role.update({
    where: {
      id: adminRole.id,
    },
    data: {
      permissions: {
        set: updatedPermissionsInDb.map((item) => ({ id: item.id })),
      },
    },
  })
  process.exit(0)
}
bootstrap()
