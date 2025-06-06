import { S3Service } from 'src/shared/services/s3.service';
import { PresignedUploadFileBodyType } from 'src/routes/media/media.model';
export declare class MediaService {
    private readonly s3Service;
    constructor(s3Service: S3Service);
    uploadFiles(files: Array<Express.Multer.File>): Promise<{
        data: {
            url: string | undefined;
        }[];
    }>;
    getPresignedUrl(body: PresignedUploadFileBodyType): Promise<{
        presignedUrl: string;
        url: string;
    }>;
}
