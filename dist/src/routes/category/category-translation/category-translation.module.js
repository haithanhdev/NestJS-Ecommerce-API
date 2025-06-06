"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryTranslationModule = void 0;
const common_1 = require("@nestjs/common");
const category_translation_controller_1 = require("./category-translation.controller");
const category_translation_service_1 = require("./category-translation.service");
const category_translation_repo_1 = require("./category-translation.repo");
let CategoryTranslationModule = class CategoryTranslationModule {
};
exports.CategoryTranslationModule = CategoryTranslationModule;
exports.CategoryTranslationModule = CategoryTranslationModule = __decorate([
    (0, common_1.Module)({
        controllers: [category_translation_controller_1.CategoryTranslationController],
        providers: [category_translation_service_1.CategoryTranslationService, category_translation_repo_1.CategoryTranslationRepo],
    })
], CategoryTranslationModule);
//# sourceMappingURL=category-translation.module.js.map