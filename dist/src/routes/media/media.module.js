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
exports.MediaModule = void 0;
const common_1 = require("@nestjs/common");
const media_controller_1 = require("./media.controller");
const media_service_1 = require("./media.service");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = __importDefault(require("multer"));
const helpers_1 = require("../../shared/helpers");
const fs_1 = require("fs");
const other_constants_1 = require("../../shared/constants/other.constants");
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, other_constants_1.UPLOAD_DIR);
    },
    filename: function (req, file, cb) {
        const newFileName = (0, helpers_1.generateRandomFilename)(file.originalname);
        cb(null, newFileName);
    },
});
let MediaModule = class MediaModule {
    constructor() {
        if (!(0, fs_1.existsSync)(other_constants_1.UPLOAD_DIR)) {
            (0, fs_1.mkdirSync)(other_constants_1.UPLOAD_DIR, { recursive: true });
        }
    }
};
exports.MediaModule = MediaModule;
exports.MediaModule = MediaModule = __decorate([
    (0, common_1.Module)({
        controllers: [media_controller_1.MediaController],
        providers: [media_service_1.MediaService],
        imports: [
            platform_express_1.MulterModule.register({
                storage: storage,
            }),
        ],
    }),
    __metadata("design:paramtypes", [])
], MediaModule);
//# sourceMappingURL=media.module.js.map