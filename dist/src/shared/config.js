"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = __importDefault(require("zod"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)({
    path: path_1.default.resolve('.env'),
});
if (!fs_1.default.existsSync(path_1.default.resolve('.env'))) {
    console.log('File .env not exist');
    process.exit(1);
}
const configSchema = zod_1.default.object({
    DATABASE_URL: zod_1.default.string(),
    ACCESS_TOKEN_SECRET: zod_1.default.string(),
    ACCESS_TOKEN_EXPIRES_IN: zod_1.default.string(),
    REFRESH_TOKEN_SECRET: zod_1.default.string(),
    REFRESH_TOKEN_EXPIRES_IN: zod_1.default.string(),
    PAYMENT_API_KEY: zod_1.default.string(),
    ADMIN_NAME: zod_1.default.string(),
    ADMIN_PASSWORD: zod_1.default.string(),
    ADMIN_EMAIL: zod_1.default.string(),
    ADMIN_PHONENUMBER: zod_1.default.string(),
    OTP_EXPIRES_IN: zod_1.default.string(),
    RESEND_API_KEY: zod_1.default.string(),
    GOOGLE_CLIENT_ID: zod_1.default.string(),
    GOOGLE_CLIENT_SECRET: zod_1.default.string(),
    GOOGLE_REDIRECT_URI: zod_1.default.string(),
    GOOGLE_CLIENT_REDIRECT_URI: zod_1.default.string(),
    APP_NAME: zod_1.default.string(),
    PREFIX_STATIC_ENDPOINT: zod_1.default.string(),
    S3_REGION: zod_1.default.string(),
    S3_ACCESS_KEY: zod_1.default.string(),
    S3_SECRET_KEY: zod_1.default.string(),
    S3_BUCKET_NAME: zod_1.default.string(),
    REDIS_URL: zod_1.default.string(),
});
const configServer = configSchema.safeParse(process.env);
if (!configServer.success) {
    console.log('Các giá trị khai báo trong file .env không hợp lệ');
    console.error(configServer.error);
    process.exit(1);
}
const envConfig = configServer.data;
exports.default = envConfig;
//# sourceMappingURL=config.js.map