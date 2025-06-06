import { z } from 'zod';
export declare const PresignedUploadFileBodySchema: z.ZodObject<{
    filename: z.ZodString;
    filesize: z.ZodNumber;
}, "strict", z.ZodTypeAny, {
    filename: string;
    filesize: number;
}, {
    filename: string;
    filesize: number;
}>;
export declare const UploadFilesResSchema: z.ZodObject<{
    data: z.ZodArray<z.ZodObject<{
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        url: string;
    }, {
        url: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    data: {
        url: string;
    }[];
}, {
    data: {
        url: string;
    }[];
}>;
export declare const PresignedUploadFileResSchema: z.ZodObject<{
    presignedUrl: z.ZodString;
    url: z.ZodString;
}, "strip", z.ZodTypeAny, {
    url: string;
    presignedUrl: string;
}, {
    url: string;
    presignedUrl: string;
}>;
export type PresignedUploadFileBodyType = z.infer<typeof PresignedUploadFileBodySchema>;
