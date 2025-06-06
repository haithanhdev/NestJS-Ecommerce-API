"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductTranslationAlreadyExistsException = void 0;
const common_1 = require("@nestjs/common");
exports.ProductTranslationAlreadyExistsException = new common_1.UnprocessableEntityException([
    {
        path: 'productId',
        message: 'Error.ProductTranslationAlreadyExists',
    },
]);
//# sourceMappingURL=product-translation.error.js.map