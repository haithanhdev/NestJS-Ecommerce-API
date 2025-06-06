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
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const order_repo_1 = require("./order.repo");
let OrderService = class OrderService {
    constructor(orderRepo) {
        this.orderRepo = orderRepo;
    }
    async list(userId, query) {
        return this.orderRepo.list(userId, query);
    }
    async listOrders(userId, roleId, query) {
        return this.orderRepo.listOrders(userId, roleId, query);
    }
    async create(userId, body) {
        const result = await this.orderRepo.create(userId, body);
        return result;
    }
    cancel(userId, roleId, orderId) {
        return this.orderRepo.cancel(userId, roleId, orderId);
    }
    changeStatus(userId, roleId, orderId, body) {
        return this.orderRepo.changeStatus(userId, roleId, orderId, body);
    }
    detail(userId, roleId, orderId) {
        return this.orderRepo.detail(userId, roleId, orderId);
    }
};
exports.OrderService = OrderService;
exports.OrderService = OrderService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [order_repo_1.OrderRepo])
], OrderService);
//# sourceMappingURL=order.service.js.map