"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUsersDTO = exports.GetMessagesQueryDTO = exports.GetMessagesResDTO = exports.MessageDTO = void 0;
const nestjs_zod_1 = require("nestjs-zod");
const chat_model_1 = require("./chat.model");
class MessageDTO extends (0, nestjs_zod_1.createZodDto)(chat_model_1.MessageSchema) {
}
exports.MessageDTO = MessageDTO;
class GetMessagesResDTO extends (0, nestjs_zod_1.createZodDto)(chat_model_1.GetMessagesResSchema) {
}
exports.GetMessagesResDTO = GetMessagesResDTO;
class GetMessagesQueryDTO extends (0, nestjs_zod_1.createZodDto)(chat_model_1.GetMessagesQuerySchema) {
}
exports.GetMessagesQueryDTO = GetMessagesQueryDTO;
class GetUsersDTO extends (0, nestjs_zod_1.createZodDto)(chat_model_1.GetUsersSchema) {
}
exports.GetUsersDTO = GetUsersDTO;
//# sourceMappingURL=chat.dto.js.map