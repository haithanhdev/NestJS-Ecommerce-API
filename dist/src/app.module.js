"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const shared_module_1 = require("./shared/shared.module");
const auth_module_1 = require("./routes/auth/auth.module");
const core_1 = require("@nestjs/core");
const custom_zod_validation_pipe_1 = __importDefault(require("./shared/pipes/custom-zod-validation.pipe"));
const nestjs_zod_1 = require("nestjs-zod");
const http_exception_filter_1 = require("./shared/filters/http-exception.filter");
const language_module_1 = require("./routes/language/language.module");
const permission_module_1 = require("./routes/permission/permission.module");
const role_module_1 = require("./routes/role/role.module");
const profile_module_1 = require("./routes/profile/profile.module");
const user_module_1 = require("./routes/user/user.module");
const media_module_1 = require("./routes/media/media.module");
const brand_module_1 = require("./routes/brand/brand.module");
const nestjs_i18n_1 = require("nestjs-i18n");
const category_module_1 = require("./routes/category/category.module");
const product_module_1 = require("./routes/product/product.module");
const path_1 = __importDefault(require("path"));
const cart_module_1 = require("./routes/cart/cart.module");
const order_module_1 = require("./routes/order/order.module");
const payment_module_1 = require("./routes/payment/payment.module");
const bullmq_1 = require("@nestjs/bullmq");
const payment_consumer_1 = require("./queues/payment.consumer");
const websocket_module_1 = require("./websocket/websocket.module");
const chat_module_1 = require("./routes/chat/chat.module");
const review_module_1 = require("./routes/review/review.module");
const config_1 = __importDefault(require("./shared/config"));
const schedule_1 = require("@nestjs/schedule");
const remove_refresh_token_cronjob_1 = require("./cronjobs/remove-refresh-token.cronjob");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            schedule_1.ScheduleModule.forRoot(),
            nestjs_i18n_1.I18nModule.forRoot({
                fallbackLanguage: 'en',
                loaderOptions: {
                    path: path_1.default.resolve('src/i18n/'),
                    watch: true,
                },
                resolvers: [{ use: nestjs_i18n_1.QueryResolver, options: ['lang'] }, nestjs_i18n_1.AcceptLanguageResolver],
                typesOutputPath: path_1.default.resolve('src/generated/i18n.generated.ts'),
            }),
            bullmq_1.BullModule.forRoot({
                connection: {
                    url: config_1.default.REDIS_URL,
                },
            }),
            shared_module_1.SharedModule,
            auth_module_1.AuthModule,
            language_module_1.LanguageModule,
            permission_module_1.PermissionModule,
            role_module_1.RoleModule,
            profile_module_1.ProfileModule,
            user_module_1.UserModule,
            media_module_1.MediaModule,
            brand_module_1.BrandModule,
            category_module_1.CategoryModule,
            product_module_1.ProductModule,
            cart_module_1.CartModule,
            order_module_1.OrderModule,
            payment_module_1.PaymentModule,
            websocket_module_1.WebsocketModule,
            chat_module_1.ChatModule,
            review_module_1.ReviewModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            {
                provide: core_1.APP_PIPE,
                useClass: custom_zod_validation_pipe_1.default,
            },
            { provide: core_1.APP_INTERCEPTOR, useClass: nestjs_zod_1.ZodSerializerInterceptor },
            {
                provide: core_1.APP_FILTER,
                useClass: http_exception_filter_1.HttpExceptionFilter,
            },
            payment_consumer_1.PaymentConsumer,
            remove_refresh_token_cronjob_1.RemoveRefreshTokenCronjob,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map