"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionAlreadyExistsException = void 0;
const common_1 = require("@nestjs/common");
exports.PermissionAlreadyExistsException = new common_1.UnprocessableEntityException([
    {
        message: 'Error.PermissionAlreadyExists',
        path: 'path',
    },
    {
        message: 'Error.PermissionAlreadyExists',
        path: 'method',
    },
]);
//# sourceMappingURL=permission.error.js.map