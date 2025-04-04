import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { NestExpressApplication } from '@nestjs/platform-express'
import path from 'path'
import { UPLOAD_DIR } from 'src/shared/constants/other.constants'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)
  app.enableCors()
  // app.useStaticAssets(UPLOAD_DIR, {
  //   prefix: '/media/static',
  // })
  await app.listen(process.env.PORT ?? 3000)
}
bootstrap()
