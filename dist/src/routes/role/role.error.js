"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProhibitedActionOnBaseRoleException = exports.RoleAlreadyExistsException = void 0;
const common_1 = require("@nestjs/common");
exports.RoleAlreadyExistsException = new common_1.UnprocessableEntityException([
    {
        message: 'Error.RoleAlreadyExists',
        path: 'name',
    },
]);
exports.ProhibitedActionOnBaseRoleException = new common_1.ForbiddenException('Error.ProhibitedActionOnBaseRole');
//# sourceMappingURL=role.error.js.map