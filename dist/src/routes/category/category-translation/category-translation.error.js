"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryTranslationAlreadyExistsException = void 0;
const common_1 = require("@nestjs/common");
exports.CategoryTranslationAlreadyExistsException = new common_1.UnprocessableEntityException([
    {
        path: 'languageId',
        message: 'Error.CategoryTranslationAlreadyExists',
    },
]);
//# sourceMappingURL=category-translation.error.js.map