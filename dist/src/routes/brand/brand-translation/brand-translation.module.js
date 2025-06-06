"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandTranslationModule = void 0;
const common_1 = require("@nestjs/common");
const brand_translation_controller_1 = require("./brand-translation.controller");
const brand_translation_service_1 = require("./brand-translation.service");
const brand_translation_repo_1 = require("./brand-translation.repo");
let BrandTranslationModule = class BrandTranslationModule {
};
exports.BrandTranslationModule = BrandTranslationModule;
exports.BrandTranslationModule = BrandTranslationModule = __decorate([
    (0, common_1.Module)({
        controllers: [brand_translation_controller_1.BrandTranslationController],
        providers: [brand_translation_service_1.BrandTranslationService, brand_translation_repo_1.BrandTranslationRepo],
    })
], BrandTranslationModule);
//# sourceMappingURL=brand-translation.module.js.map