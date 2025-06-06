"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("../src/app.module");
const role_constants_1 = require("../src/shared/constants/role.constants");
const prisma_service_1 = require("../src/shared/services/prisma.service");
const SellerModule = [
    'AUTH',
    'MEDIA',
    'MANAGE-PRODUCT',
    'PRODUCT-TRANSLATIONS',
    'PROFILE',
    'CART',
    'ORDERS',
    'LANGUAGES',
    'CHAT',
    'USERS',
    'REVIEWS',
];
const ClientModule = ['AUTH', 'MEDIA', 'PROFILE', 'CART', 'ORDERS', 'CHAT', 'USERS', 'REVIEWS'];
const prisma = new prisma_service_1.PrismaService();
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(3000);
    const server = app.getHttpServer();
    const router = app.getHttpAdapter().getInstance()._router;
    const permissionsInDb = await prisma.permission.findMany({
        where: {
            deletedAt: null,
        },
    });
    const availableRoutes = router.stack
        .map((layer) => {
        if (layer.route) {
            const path = layer.route?.path;
            const method = String(layer.route?.stack[0].method).toUpperCase();
            const moduleName = String(path.split('/')[1]).toUpperCase();
            return {
                path,
                method,
                name: method + ' ' + path,
                module: moduleName,
            };
        }
    })
        .filter((item) => item !== undefined);
    const permissionsInDbMap = permissionsInDb.reduce((acc, item) => {
        acc[`${item.method}-${item.path}`] = item;
        return acc;
    }, {});
    const availableRoutesMap = availableRoutes.reduce((acc, item) => {
        acc[`${item.method}-${item.path}`] = item;
        return acc;
    }, {});
    const permissionsToDelete = permissionsInDb.filter((item) => {
        return !availableRoutesMap[`${item.method}-${item.path}`];
    });
    if (permissionsToDelete.length > 0) {
        const deleteResult = await prisma.permission.deleteMany({
            where: {
                id: {
                    in: permissionsToDelete.map((item) => item.id),
                },
            },
        });
        console.log('Deleted permissions', deleteResult.count);
    }
    else {
        console.log('No permissions to delete');
    }
    const routesToAdd = availableRoutes.filter((item) => {
        return !permissionsInDbMap[`${item.method}-${item.path}`];
    });
    if (routesToAdd.length > 0) {
        const createResult = await prisma.permission.createMany({
            data: routesToAdd,
            skipDuplicates: true,
        });
        console.log('Created permissions', createResult.count);
    }
    else {
        console.log('No permissions to add');
    }
    const updatedPermissionsInDb = await prisma.permission.findMany({
        where: {
            deletedAt: null,
        },
    });
    const adminPermissionIds = updatedPermissionsInDb.map((item) => ({ id: item.id }));
    const sellerPermissionIds = updatedPermissionsInDb
        .filter((item) => SellerModule.includes(item.module))
        .map((item) => ({ id: item.id }));
    const clientPermissionIds = updatedPermissionsInDb
        .filter((item) => ClientModule.includes(item.module))
        .map((item) => ({ id: item.id }));
    await Promise.all([
        updateRole(adminPermissionIds, role_constants_1.RoleName.Admin),
        updateRole(sellerPermissionIds, role_constants_1.RoleName.Seller),
        updateRole(clientPermissionIds, role_constants_1.RoleName.Client),
    ]);
    process.exit(0);
}
const updateRole = async (permissionIds, rolename) => {
    const role = await prisma.role.findFirstOrThrow({
        where: {
            name: rolename,
            deletedAt: null,
        },
    });
    await prisma.role.update({
        where: {
            id: role.id,
        },
        data: {
            permissions: {
                set: permissionIds,
            },
        },
    });
};
bootstrap();
//# sourceMappingURL=create-permissions.js.map