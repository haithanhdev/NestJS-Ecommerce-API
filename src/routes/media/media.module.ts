import { Module } from '@nestjs/common'
import { MediaController } from './media.controller'
import { MediaService } from './media.service'
import { MulterModule } from '@nestjs/platform-express'
import multer from 'multer'
import path from 'path'
import { generateRandomFilename } from 'src/shared/helpers'
const UPLOAD_DIR = path.resolve('upload')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, UPLOAD_DIR)
  },
  filename: function (req, file, cb) {
    const newFileName = generateRandomFilename(file.originalname)
    cb(null, newFileName)
  },
})

@Module({
  controllers: [MediaController],
  providers: [MediaService],
  imports: [
    MulterModule.register({
      storage: storage,
    }),
  ],
})
export class MediaModule {}
