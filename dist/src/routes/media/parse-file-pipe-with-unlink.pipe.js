"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParseFilePipeWithUnlink = void 0;
const common_1 = require("@nestjs/common");
const promises_1 = require("fs/promises");
class ParseFilePipeWithUnlink extends common_1.ParseFilePipe {
    constructor(options) {
        super(options);
    }
    async transform(files) {
        return super.transform(files).catch(async (error) => {
            await Promise.all(files.map((file) => (0, promises_1.unlink)(file.path)));
            throw error;
        });
    }
}
exports.ParseFilePipeWithUnlink = ParseFilePipeWithUnlink;
//# sourceMappingURL=parse-file-pipe-with-unlink.pipe.js.map