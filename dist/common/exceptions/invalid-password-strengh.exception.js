"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidPasswordStrengthException = void 0;
const common_1 = require("@nestjs/common");
class InvalidPasswordStrengthException extends common_1.HttpException {
    constructor() {
        super('Invalid password strength', common_1.HttpStatus.BAD_REQUEST);
    }
}
exports.InvalidPasswordStrengthException = InvalidPasswordStrengthException;
//# sourceMappingURL=invalid-password-strengh.exception.js.map