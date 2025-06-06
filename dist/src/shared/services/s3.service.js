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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.S3Service = void 0;
const client_s3_1 = require("@aws-sdk/client-s3");
const lib_storage_1 = require("@aws-sdk/lib-storage");
const s3_request_presigner_1 = require("@aws-sdk/s3-request-presigner");
const common_1 = require("@nestjs/common");
const fs_1 = require("fs");
const config_1 = __importDefault(require("../config"));
const mime_1 = __importDefault(require("mime"));
let S3Service = class S3Service {
    constructor() {
        this.createPresignedUrlWithClient = (filename) => {
            const contentType = mime_1.default.lookup(filename) || 'application/octet-stream';
            const command = new client_s3_1.PutObjectCommand({ Bucket: config_1.default.S3_BUCKET_NAME, Key: filename, ContentType: contentType });
            return (0, s3_request_presigner_1.getSignedUrl)(this.s3, command, { expiresIn: 10 });
        };
        this.s3 = new client_s3_1.S3({
            region: config_1.default.S3_REGION,
            credentials: {
                accessKeyId: config_1.default.S3_ACCESS_KEY,
                secretAccessKey: config_1.default.S3_SECRET_KEY,
            },
        });
    }
    async UploadedFile({ filename, filepath, contentType }) {
        const parallelUploads3 = new lib_storage_1.Upload({
            client: this.s3,
            params: {
                Bucket: config_1.default.S3_BUCKET_NAME,
                Key: filename,
                Body: (0, fs_1.readFileSync)(filepath),
                ContentType: contentType,
            },
            tags: [],
            queueSize: 4,
            partSize: 1024 * 1024 * 5,
            leavePartsOnError: false,
        });
        return await parallelUploads3.done();
    }
};
exports.S3Service = S3Service;
exports.S3Service = S3Service = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], S3Service);
//# sourceMappingURL=s3.service.js.map