"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandTranslationAlreadyExistsException = void 0;
const common_1 = require("@nestjs/common");
exports.BrandTranslationAlreadyExistsException = new common_1.UnprocessableEntityException([
    {
        path: 'languageId',
        message: 'Error.BrandTranslationAlreadyExists',
    },
]);
//# sourceMappingURL=brand-translation.error.js.map