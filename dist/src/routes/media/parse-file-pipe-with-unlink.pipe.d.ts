import { ParseFileOptions, ParseFilePipe } from '@nestjs/common';
export declare class ParseFilePipeWithUnlink extends ParseFilePipe {
    constructor(options?: ParseFileOptions);
    transform(files: Array<Express.Multer.File>): Promise<any>;
}
