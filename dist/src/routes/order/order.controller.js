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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderController = void 0;
const common_1 = require("@nestjs/common");
const nestjs_zod_1 = require("nestjs-zod");
const order_dto_1 = require("./order.dto");
const order_service_1 = require("./order.service");
const active_user_decorator_1 = require("../../shared/decorators/active-user.decorator");
let OrderController = class OrderController {
    constructor(orderService) {
        this.orderService = orderService;
    }
    getCart(userId, query) {
        return this.orderService.list(userId, query);
    }
    getOrders(userId, roleId, query) {
        return this.orderService.listOrders(userId, roleId, query);
    }
    create(userId, body) {
        return this.orderService.create(userId, body);
    }
    detail(userId, roleId, param) {
        return this.orderService.detail(userId, roleId, param.orderId);
    }
    detailOrder(userId, roleId, param) {
        return this.orderService.detail(userId, roleId, param.orderId);
    }
    cancel(userId, roleId, param, _) {
        return this.orderService.cancel(userId, roleId, param.orderId);
    }
    changeStatus(userId, roleId, param, body) {
        return this.orderService.changeStatus(userId, roleId, param.orderId, body);
    }
};
exports.OrderController = OrderController;
__decorate([
    (0, common_1.Get)(),
    (0, nestjs_zod_1.ZodSerializerDto)(order_dto_1.GetOrderListResDTO),
    __param(0, (0, active_user_decorator_1.ActiveUser)('userId')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, order_dto_1.GetOrderListQueryDTO]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "getCart", null);
__decorate([
    (0, common_1.Get)('/manage'),
    (0, nestjs_zod_1.ZodSerializerDto)(order_dto_1.GetOrderListResDTO),
    __param(0, (0, active_user_decorator_1.ActiveUser)('userId')),
    __param(1, (0, active_user_decorator_1.ActiveUser)('roleId')),
    __param(2, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, order_dto_1.GetOrderListQueryDTO]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "getOrders", null);
__decorate([
    (0, common_1.Post)(),
    (0, nestjs_zod_1.ZodSerializerDto)(order_dto_1.CreateOrderResDTO),
    __param(0, (0, active_user_decorator_1.ActiveUser)('userId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, order_dto_1.CreateOrderBodyDTO]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':orderId'),
    (0, nestjs_zod_1.ZodSerializerDto)(order_dto_1.GetOrderDetailResDTO),
    __param(0, (0, active_user_decorator_1.ActiveUser)('userId')),
    __param(1, (0, active_user_decorator_1.ActiveUser)('roleId')),
    __param(2, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, order_dto_1.GetOrderParamsDTO]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "detail", null);
__decorate([
    (0, common_1.Get)('/manage/:orderId'),
    (0, nestjs_zod_1.ZodSerializerDto)(order_dto_1.GetOrderDetailResDTO),
    __param(0, (0, active_user_decorator_1.ActiveUser)('userId')),
    __param(1, (0, active_user_decorator_1.ActiveUser)('roleId')),
    __param(2, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, order_dto_1.GetOrderParamsDTO]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "detailOrder", null);
__decorate([
    (0, common_1.Put)(':orderId'),
    (0, nestjs_zod_1.ZodSerializerDto)(order_dto_1.CancelOrderResDTO),
    __param(0, (0, active_user_decorator_1.ActiveUser)('userId')),
    __param(1, (0, active_user_decorator_1.ActiveUser)('roleId')),
    __param(2, (0, common_1.Param)()),
    __param(3, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, order_dto_1.GetOrderParamsDTO,
        order_dto_1.CancelOrderBodyDTO]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "cancel", null);
__decorate([
    (0, common_1.Put)('/status/:orderId'),
    (0, nestjs_zod_1.ZodSerializerDto)(order_dto_1.CancelOrderResDTO),
    __param(0, (0, active_user_decorator_1.ActiveUser)('userId')),
    __param(1, (0, active_user_decorator_1.ActiveUser)('roleId')),
    __param(2, (0, common_1.Param)()),
    __param(3, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, order_dto_1.GetOrderParamsDTO,
        order_dto_1.ChangeOrderStatusBodyDTO]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "changeStatus", null);
exports.OrderController = OrderController = __decorate([
    (0, common_1.Controller)('orders'),
    __metadata("design:paramtypes", [order_service_1.OrderService])
], OrderController);
//# sourceMappingURL=order.controller.js.map