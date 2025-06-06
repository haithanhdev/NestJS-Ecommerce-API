"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductTranslationModule = void 0;
const common_1 = require("@nestjs/common");
const product_translation_controller_1 = require("./product-translation.controller");
const product_translation_service_1 = require("./product-translation.service");
const product_translation_repo_1 = require("./product-translation.repo");
let ProductTranslationModule = class ProductTranslationModule {
};
exports.ProductTranslationModule = ProductTranslationModule;
exports.ProductTranslationModule = ProductTranslationModule = __decorate([
    (0, common_1.Module)({
        controllers: [product_translation_controller_1.ProductTranslationController],
        providers: [product_translation_service_1.ProductTranslationService, product_translation_repo_1.ProductTranslationRepo],
    })
], ProductTranslationModule);
//# sourceMappingURL=product-translation.module.js.map