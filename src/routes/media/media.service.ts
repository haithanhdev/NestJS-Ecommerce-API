import { Injectable } from '@nestjs/common'
import { S3Service } from 'src/shared/services/s3.service'
import { unlink } from 'fs/promises'
import { generateRandomFilename } from 'src/shared/helpers'
import { PresignedUploadFileBodyType } from 'src/routes/media/media.model'
@Injectable()
export class MediaService {
  constructor(private readonly s3Service: S3Service) {}
  async uploadFiles(files: Array<Express.Multer.File>) {
    const result = await Promise.all(
      files.map((file) => {
        return this.s3Service
          .UploadedFile({
            filename: 'images/' + file.filename,
            filepath: file.path,
            contentType: file.mimetype,
          })
          .then((res) => {
            return { url: res.Location }
          })
      }),
    )
    //Xoá file sau khi upload lên S3
    await Promise.all(
      files.map((file) => {
        return unlink(file.path)
      }),
    )
    return {
      data: result,
    }
  }
  async getPresignedUrl(body: PresignedUploadFileBodyType) {
    const randomFilename = generateRandomFilename(body.filename)
    const presignedUrl = await this.s3Service.createPresignedUrlWithClient(randomFilename)
    const url = presignedUrl.split('?')[0]
    return {
      presignedUrl,
      url,
    }
  }
}
