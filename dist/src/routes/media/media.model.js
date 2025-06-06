"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PresignedUploadFileResSchema = exports.UploadFilesResSchema = exports.PresignedUploadFileBodySchema = void 0;
const zod_1 = require("zod");
exports.PresignedUploadFileBodySchema = zod_1.z
    .object({
    filename: zod_1.z.string(),
    filesize: zod_1.z.number().max(5 * 1024 * 1024),
})
    .strict();
exports.UploadFilesResSchema = zod_1.z.object({
    data: zod_1.z.array(zod_1.z.object({
        url: zod_1.z.string(),
    })),
});
exports.PresignedUploadFileResSchema = zod_1.z.object({
    presignedUrl: zod_1.z.string(),
    url: zod_1.z.string(),
});
//# sourceMappingURL=media.model.js.map