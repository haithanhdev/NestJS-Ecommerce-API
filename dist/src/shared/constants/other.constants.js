"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PREFIX_PAYMENT_CODE = exports.SortBy = exports.OrderBy = exports.ALL_LANGUAGE_CODE = exports.UPLOAD_DIR = void 0;
const path_1 = __importDefault(require("path"));
exports.UPLOAD_DIR = path_1.default.resolve('upload');
exports.ALL_LANGUAGE_CODE = 'all';
exports.OrderBy = {
    Asc: 'asc',
    Desc: 'desc',
};
exports.SortBy = {
    Price: 'price',
    CreatedAt: 'createdAt',
    Sale: 'sale',
};
exports.PREFIX_PAYMENT_CODE = 'DH';
//# sourceMappingURL=other.constants.js.map