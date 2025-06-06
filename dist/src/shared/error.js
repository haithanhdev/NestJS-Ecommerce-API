"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidPasswordException = exports.NotFoundRecordException = void 0;
const common_1 = require("@nestjs/common");
exports.NotFoundRecordException = new common_1.NotFoundException('Error.NotFound');
exports.InvalidPasswordException = new common_1.UnprocessableEntityException([
    {
        message: 'Error.InvalidPasswordorEmail',
        path: 'password',
    },
]);
//# sourceMappingURL=error.js.map