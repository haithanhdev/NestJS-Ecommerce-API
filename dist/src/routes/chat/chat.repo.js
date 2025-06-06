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
exports.ChatRepo = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../shared/services/prisma.service");
let ChatRepo = class ChatRepo {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async list({ limit, page, fromUserId, toUserId, }) {
        const skip = (page - 1) * limit;
        const take = limit;
        const cond = {
            where: {
                OR: [
                    {
                        fromUserId: fromUserId,
                        toUserId: toUserId,
                    },
                    {
                        fromUserId: toUserId,
                        toUserId: fromUserId,
                    },
                ],
            },
        };
        const [totalItems, data, receiver] = await Promise.all([
            this.prismaService.message.count(cond),
            this.prismaService.message.findMany({
                ...cond,
                skip,
                take,
                orderBy: {
                    id: 'desc',
                },
            }),
            this.prismaService.user.findFirst({
                where: { id: toUserId },
                select: { id: true, name: true, email: true, avatar: true },
            }),
        ]);
        return {
            messages: data,
            totalItems,
            page: page,
            limit: limit,
            totalPages: Math.ceil(totalItems / limit),
            receiver,
        };
    }
    async listReceivers(fromUserId) {
        console.log(fromUserId);
        const receiver = await this.prismaService.$queryRaw `
                select distinct on("User"."id") "User"."id", "User"."email", "User"."name", "User"."avatar"
                from "User", "Message"
                where ("User"."id" = "Message"."toUserId" and "Message"."fromUserId" = ${fromUserId}) or ("User"."id" = "Message"."fromUserId" and "Message"."toUserId" = ${fromUserId})
            `;
        return receiver;
    }
    create(data) {
        return this.prismaService.message.create({
            data: data,
        });
    }
};
exports.ChatRepo = ChatRepo;
exports.ChatRepo = ChatRepo = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ChatRepo);
//# sourceMappingURL=chat.repo.js.map