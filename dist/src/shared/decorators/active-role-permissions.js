"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActiveRolePermissions = void 0;
const common_1 = require("@nestjs/common");
const auth_constants_1 = require("../constants/auth.constants");
exports.ActiveRolePermissions = (0, common_1.createParamDecorator)((field, context) => {
    const request = context.switchToHttp().getRequest();
    const rolePermissions = request[auth_constants_1.REQUEST_ROLE_PERMISSIONS];
    return field ? rolePermissions?.[field] : rolePermissions;
});
//# sourceMappingURL=active-role-permissions.js.map