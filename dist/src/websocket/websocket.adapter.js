"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebsocketAdapter = void 0;
const platform_socket_io_1 = require("@nestjs/platform-socket.io");
const helpers_1 = require("../shared/helpers");
const shared_websocket_repo_1 = require("../shared/repositories/shared-websocket.repo");
const token_service_1 = require("../shared/services/token.service");
class WebsocketAdapter extends platform_socket_io_1.IoAdapter {
    constructor(app) {
        super(app);
        this.sharedWebsocketRepository = app.get(shared_websocket_repo_1.SharedWebsocketRepository);
        this.tokenService = app.get(token_service_1.TokenService);
    }
    createIOServer(port, options) {
        const server = super.createIOServer(3003, {
            ...options,
            cors: {
                origin: '*',
                methods: ['GET', 'POST'],
                credentials: true,
            },
        });
        server.use((socket, next) => {
            this.authMiddleware(socket, next);
        });
        server.of(/.*/).use((socket, next) => {
            this.authMiddleware(socket, next);
        });
        return server;
    }
    async authMiddleware(socket, next) {
        const { authorization } = socket.handshake.headers;
        if (!authorization) {
            return next(new Error('Missing authorization header'));
        }
        const accessToken = authorization.split(' ')[1];
        if (!accessToken) {
            return next(new Error('Missing accessToken'));
        }
        try {
            const { userId } = await this.tokenService.verifyAccessToken(accessToken);
            await socket.join((0, helpers_1.generateRoomUserId)(userId));
            socket.data.userId = userId;
            await this.sharedWebsocketRepository.create({ id: socket.id, userId });
            socket.on('disconnect', async () => {
                await this.sharedWebsocketRepository.delete(socket.id).catch(() => { });
            });
            next();
        }
        catch (error) {
            next(error);
        }
    }
}
exports.WebsocketAdapter = WebsocketAdapter;
//# sourceMappingURL=websocket.adapter.js.map