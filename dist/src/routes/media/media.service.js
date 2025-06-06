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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaService = void 0;
const common_1 = require("@nestjs/common");
const s3_service_1 = require("../../shared/services/s3.service");
const promises_1 = require("fs/promises");
const helpers_1 = require("../../shared/helpers");
let MediaService = class MediaService {
    constructor(s3Service) {
        this.s3Service = s3Service;
    }
    async uploadFiles(files) {
        const result = await Promise.all(files.map((file) => {
            return this.s3Service
                .UploadedFile({
                filename: 'images/' + file.filename,
                filepath: file.path,
                contentType: file.mimetype,
            })
                .then((res) => {
                return { url: res.Location };
            });
        }));
        await Promise.all(files.map((file) => {
            return (0, promises_1.unlink)(file.path);
        }));
        return {
            data: result,
        };
    }
    async getPresignedUrl(body) {
        const randomFilename = (0, helpers_1.generateRandomFilename)(body.filename);
        const presignedUrl = await this.s3Service.createPresignedUrlWithClient(randomFilename);
        const url = presignedUrl.split('?')[0];
        return {
            presignedUrl,
            url,
        };
    }
};
exports.MediaService = MediaService;
exports.MediaService = MediaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [s3_service_1.S3Service])
], MediaService);
//# sourceMappingURL=media.service.js.map