"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PresignedUploadFileResDTO = exports.UploadFilesResDTO = exports.PresignedUploadFileBodyDTO = void 0;
const nestjs_zod_1 = require("nestjs-zod");
const media_model_1 = require("./media.model");
class PresignedUploadFileBodyDTO extends (0, nestjs_zod_1.createZodDto)(media_model_1.PresignedUploadFileBodySchema) {
}
exports.PresignedUploadFileBodyDTO = PresignedUploadFileBodyDTO;
class UploadFilesResDTO extends (0, nestjs_zod_1.createZodDto)(media_model_1.UploadFilesResSchema) {
}
exports.UploadFilesResDTO = UploadFilesResDTO;
class PresignedUploadFileResDTO extends (0, nestjs_zod_1.createZodDto)(media_model_1.PresignedUploadFileResSchema) {
}
exports.PresignedUploadFileResDTO = PresignedUploadFileResDTO;
//# sourceMappingURL=media.dto.js.map