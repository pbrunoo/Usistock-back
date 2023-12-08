"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidPasswordLengthException = void 0;
const common_1 = require("@nestjs/common");
class InvalidPasswordLengthException extends common_1.HttpException {
    constructor() {
        super('Invalid password length', common_1.HttpStatus.BAD_REQUEST);
    }
}
exports.InvalidPasswordLengthException = InvalidPasswordLengthException;
//# sourceMappingURL=invalid-password-length.exception.js.map