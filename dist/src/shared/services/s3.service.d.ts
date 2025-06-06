export declare class S3Service {
    private s3;
    constructor();
    UploadedFile({ filename, filepath, contentType }: {
        filename: string;
        filepath: string;
        contentType: string;
    }): Promise<import("@aws-sdk/client-s3").CompleteMultipartUploadCommandOutput>;
    createPresignedUrlWithClient: (filename: string) => Promise<string>;
}
