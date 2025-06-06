"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedRoleRepository = void 0;
const common_1 = require("@nestjs/common");
const role_constants_1 = require("../constants/role.constants");
const prisma_service_1 = require("../services/prisma.service");
let SharedRoleRepository = class SharedRoleRepository {
    constructor(prismaService) {
        this.prismaService = prismaService;
        this.clientRoleId = null;
        this.adminRoleId = null;
    }
    async getRole(roleName) {
        const role = await this.prismaService
            .$queryRaw `SELECT * FROM "Role" WHERE name = ${role_constants_1.RoleName.Client} AND "deletedAt" IS NULL LIMIT 1`.then((res) => {
            if (res.length === 0) {
                throw new Error('Client role not found');
            }
            else {
                return res[0];
            }
        });
        return role;
    }
    async getClientRoleId() {
        if (this.clientRoleId) {
            return this.clientRoleId;
        }
        const role = await this.getRole(role_constants_1.RoleName.Client);
        this.clientRoleId = role.id;
        return role.id;
    }
    async getAdminRoleId() {
        if (this.adminRoleId) {
            return this.adminRoleId;
        }
        const role = await this.getRole(role_constants_1.RoleName.Admin);
        this.adminRoleId = role.id;
        return role.id;
    }
};
exports.SharedRoleRepository = SharedRoleRepository;
exports.SharedRoleRepository = SharedRoleRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SharedRoleRepository);
//# sourceMappingURL=shared-role.repo.js.map