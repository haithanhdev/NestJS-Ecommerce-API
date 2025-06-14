"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModule = void 0;
const common_1 = require("@nestjs/common");
const product_controller_1 = require("./product.controller");
const product_service_1 = require("./product.service");
const product_translation_module_1 = require("./product-translation/product-translation.module");
const product_repo_1 = require("./product.repo");
const manage_product_service_1 = require("./manage-product.service");
const manage_product_controller_1 = require("./manage-product.controller");
let ProductModule = class ProductModule {
};
exports.ProductModule = ProductModule;
exports.ProductModule = ProductModule = __decorate([
    (0, common_1.Module)({
        controllers: [product_controller_1.ProductController, manage_product_controller_1.ManageProductController],
        providers: [product_service_1.ProductService, product_repo_1.ProductRepo, manage_product_service_1.ManageProductService],
        imports: [product_translation_module_1.ProductTranslationModule],
    })
], ProductModule);
//# sourceMappingURL=product.module.js.map