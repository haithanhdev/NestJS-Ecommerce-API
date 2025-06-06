"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageAlreadyExistsException = void 0;
const common_1 = require("@nestjs/common");
exports.LanguageAlreadyExistsException = new common_1.UnprocessableEntityException([
    {
        message: 'Error.LanguageAlreadyExists',
        path: 'id',
    },
]);
//# sourceMappingURL=language.error.js.map