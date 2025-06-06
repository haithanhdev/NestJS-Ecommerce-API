"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const nestjs_zod_1 = require("nestjs-zod");
const path_1 = __importDefault(require("path"));
const media_dto_1 = require("./media.dto");
const media_service_1 = require("./media.service");
const parse_file_pipe_with_unlink_pipe_1 = require("./parse-file-pipe-with-unlink.pipe");
const other_constants_1 = require("../../shared/constants/other.constants");
const auth_decorator_1 = require("../../shared/decorators/auth.decorator");
let MediaController = class MediaController {
    constructor(mediaService) {
        this.mediaService = mediaService;
    }
    async uploadFile(files) {
        return await this.mediaService.uploadFiles(files);
    }
    serveFile(filename, res) {
        return res.sendFile(path_1.default.resolve(other_constants_1.UPLOAD_DIR, filename), (error) => {
            if (error) {
                const notfound = new common_1.NotFoundException('File not found');
                res.status(notfound.getStatus()).json(notfound.getResponse());
            }
        });
    }
    async createPresignedUrl(body) {
        return await this.mediaService.getPresignedUrl(body);
    }
};
exports.MediaController = MediaController;
__decorate([
    (0, common_1.Post)('images/upload'),
    (0, nestjs_zod_1.ZodSerializerDto)(media_dto_1.UploadFilesResDTO),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('files', 100, {
        limits: {
            fileSize: 10 * 1024 * 1024,
        },
    })),
    __param(0, (0, common_1.UploadedFiles)(new parse_file_pipe_with_unlink_pipe_1.ParseFilePipeWithUnlink({
        validators: [
            new common_1.MaxFileSizeValidator({ maxSize: 10 * 1024 * 1024 }),
            new common_1.FileTypeValidator({ fileType: /(jpg|jpeg|png|webp)$/ }),
        ],
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], MediaController.prototype, "uploadFile", null);
__decorate([
    (0, common_1.Get)('static/:filename'),
    (0, auth_decorator_1.IsPublic)(),
    __param(0, (0, common_1.Param)('filename')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], MediaController.prototype, "serveFile", null);
__decorate([
    (0, common_1.Post)('images/upload/presigned-url'),
    (0, nestjs_zod_1.ZodSerializerDto)(media_dto_1.PresignedUploadFileResDTO),
    (0, auth_decorator_1.IsPublic)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [media_dto_1.PresignedUploadFileBodyDTO]),
    __metadata("design:returntype", Promise)
], MediaController.prototype, "createPresignedUrl", null);
exports.MediaController = MediaController = __decorate([
    (0, common_1.Controller)('media'),
    __metadata("design:paramtypes", [media_service_1.MediaService])
], MediaController);
//# sourceMappingURL=media.controller.js.map