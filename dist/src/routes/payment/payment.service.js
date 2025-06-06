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
exports.PaymentService = void 0;
const common_1 = require("@nestjs/common");
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const payment_repo_1 = require("./payment.repo");
const helpers_1 = require("../../shared/helpers");
const shared_websocket_repo_1 = require("../../shared/repositories/shared-websocket.repo");
let PaymentService = class PaymentService {
    constructor(paymentRepo, sharedWebsocketRepository) {
        this.paymentRepo = paymentRepo;
        this.sharedWebsocketRepository = sharedWebsocketRepository;
    }
    async receiver(body) {
        const userId = await this.paymentRepo.receiver(body);
        this.server.to((0, helpers_1.generateRoomUserId)(userId)).emit('payment', {
            status: 'success',
        });
        return {
            message: 'Payment received successfully',
        };
    }
};
exports.PaymentService = PaymentService;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], PaymentService.prototype, "server", void 0);
exports.PaymentService = PaymentService = __decorate([
    (0, common_1.Injectable)(),
    (0, websockets_1.WebSocketGateway)({ namespace: 'payment' }),
    __metadata("design:paramtypes", [payment_repo_1.PaymentRepo,
        shared_websocket_repo_1.SharedWebsocketRepository])
], PaymentService);
//# sourceMappingURL=payment.service.js.map