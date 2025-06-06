"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CannotUpdateOrDeleteYourselfException = exports.RoleNotFoundException = exports.CannotSetAdminRoleToUserException = exports.CannotDeleteAdminUserException = exports.CannotUpdateAdminUserException = exports.UserAlreadyExistsException = void 0;
const common_1 = require("@nestjs/common");
exports.UserAlreadyExistsException = new common_1.UnprocessableEntityException([
    {
        message: 'Error.UserAlreadyExists',
        path: 'email',
    },
]);
exports.CannotUpdateAdminUserException = new common_1.ForbiddenException('Error.CannotUpdateAdminUser');
exports.CannotDeleteAdminUserException = new common_1.ForbiddenException('Error.CannotDeleteAdminUser');
exports.CannotSetAdminRoleToUserException = new common_1.ForbiddenException('Error.CannotSetAdminRoleToUser');
exports.RoleNotFoundException = new common_1.UnprocessableEntityException([
    {
        message: 'Error.RoleNotFound',
        path: 'roleId',
    },
]);
exports.CannotUpdateOrDeleteYourselfException = new common_1.ForbiddenException('Error.CannotUpdateOrDeleteYourself');
//# sourceMappingURL=user.error.js.map