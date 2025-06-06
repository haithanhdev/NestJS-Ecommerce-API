import { Response } from 'express';
import { PresignedUploadFileBodyDTO } from 'src/routes/media/media.dto';
import { MediaService } from 'src/routes/media/media.service';
export declare class MediaController {
    private readonly mediaService;
    constructor(mediaService: MediaService);
    uploadFile(files: Array<Express.Multer.File>): Promise<{
        data: {
            url: string | undefined;
        }[];
    }>;
    serveFile(filename: string, res: Response): void;
    createPresignedUrl(body: PresignedUploadFileBodyDTO): Promise<{
        presignedUrl: string;
        url: string;
    }>;
}
