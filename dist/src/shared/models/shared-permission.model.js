"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionSchema = void 0;
const role_constants_1 = require("../constants/role.constants");
const zod_1 = require("zod");
exports.PermissionSchema = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string().max(500),
    description: zod_1.z.string(),
    module: zod_1.z.string().max(500),
    path: zod_1.z.string().max(1000),
    method: zod_1.z.enum([
        role_constants_1.HTTPMethod.GET,
        role_constants_1.HTTPMethod.POST,
        role_constants_1.HTTPMethod.PUT,
        role_constants_1.HTTPMethod.DELETE,
        role_constants_1.HTTPMethod.PATCH,
        role_constants_1.HTTPMethod.OPTIONS,
        role_constants_1.HTTPMethod.HEAD,
    ]),
    createdById: zod_1.z.number().nullable(),
    updatedById: zod_1.z.number().nullable(),
    deletedById: zod_1.z.number().nullable(),
    deletedAt: zod_1.z.date().nullable(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
});
//# sourceMappingURL=shared-permission.model.js.map