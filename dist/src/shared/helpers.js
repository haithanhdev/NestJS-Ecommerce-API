"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRoomUserId = exports.generateCancelPaymentJobId = exports.generateRandomFilename = exports.generateOTP = void 0;
exports.isUniqueConstraintPrismaError = isUniqueConstraintPrismaError;
exports.isNotFoundPrismaError = isNotFoundPrismaError;
exports.isForeignKeyConstraintPrismaError = isForeignKeyConstraintPrismaError;
const client_1 = require("@prisma/client");
const crypto_1 = require("crypto");
const path_1 = __importDefault(require("path"));
const uuid_1 = require("uuid");
function isUniqueConstraintPrismaError(error) {
    return error instanceof client_1.Prisma.PrismaClientKnownRequestError && error.code === 'P2002';
}
function isNotFoundPrismaError(error) {
    return error instanceof client_1.Prisma.PrismaClientKnownRequestError && error.code === 'P2025';
}
function isForeignKeyConstraintPrismaError(error) {
    return error instanceof client_1.Prisma.PrismaClientKnownRequestError && error.code === 'P2003';
}
const generateOTP = () => {
    return String((0, crypto_1.randomInt)(100000, 1000000));
};
exports.generateOTP = generateOTP;
const generateRandomFilename = (filename) => {
    const ext = path_1.default.extname(filename);
    return `${(0, uuid_1.v4)()}${ext}`;
};
exports.generateRandomFilename = generateRandomFilename;
const generateCancelPaymentJobId = (paymentId) => {
    return `paymentId-${paymentId}`;
};
exports.generateCancelPaymentJobId = generateCancelPaymentJobId;
const generateRoomUserId = (userId) => {
    return `userId-${userId}`;
};
exports.generateRoomUserId = generateRoomUserId;
//# sourceMappingURL=helpers.js.map