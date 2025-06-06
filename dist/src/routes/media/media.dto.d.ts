declare const PresignedUploadFileBodyDTO_base: import("nestjs-zod").ZodDto<{
    filename: string;
    filesize: number;
}, import("zod").ZodObjectDef<{
    filename: import("zod").ZodString;
    filesize: import("zod").ZodNumber;
}, "strict", import("zod").ZodTypeAny>, {
    filename: string;
    filesize: number;
}>;
export declare class PresignedUploadFileBodyDTO extends PresignedUploadFileBodyDTO_base {
}
declare const UploadFilesResDTO_base: import("nestjs-zod").ZodDto<{
    data: {
        url: string;
    }[];
}, import("zod").ZodObjectDef<{
    data: import("zod").ZodArray<import("zod").ZodObject<{
        url: import("zod").ZodString;
    }, "strip", import("zod").ZodTypeAny, {
        url: string;
    }, {
        url: string;
    }>, "many">;
}, "strip", import("zod").ZodTypeAny>, {
    data: {
        url: string;
    }[];
}>;
export declare class UploadFilesResDTO extends UploadFilesResDTO_base {
}
declare const PresignedUploadFileResDTO_base: import("nestjs-zod").ZodDto<{
    url: string;
    presignedUrl: string;
}, import("zod").ZodObjectDef<{
    presignedUrl: import("zod").ZodString;
    url: import("zod").ZodString;
}, "strip", import("zod").ZodTypeAny>, {
    url: string;
    presignedUrl: string;
}>;
export declare class PresignedUploadFileResDTO extends PresignedUploadFileResDTO_base {
}
export {};
