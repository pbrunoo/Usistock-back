"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var PasswordEncrypterService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordEncrypterService = void 0;
const invalid_password_strengh_exception_1 = require("./../exceptions/invalid-password-strengh.exception");
const invalid_password_length_exception_1 = require("./../exceptions/invalid-password-length.exception");
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
let PasswordEncrypterService = PasswordEncrypterService_1 = class PasswordEncrypterService {
    encrypt(password) {
        const passwordLengthIsLowerThenMinRequired = password.length < PasswordEncrypterService_1.MIN_LENGTH;
        if (passwordLengthIsLowerThenMinRequired) {
            throw new invalid_password_length_exception_1.InvalidPasswordLengthException();
        }
        const passwordMatchRequiredStrength = password.match(PasswordEncrypterService_1.PASSWORD_STRENGTH_REGEX);
        if (!passwordMatchRequiredStrength) {
            throw new invalid_password_strengh_exception_1.InvalidPasswordStrengthException();
        }
        const salt = bcrypt.gentSaltSync(10);
        const encryptedPassword = bcrypt.hashSync(password, salt);
        return encryptedPassword;
    }
    passwordIsAMatch(plainPassword, hashedPassword) {
        return bcrypt.compareSync(plainPassword, hashedPassword);
    }
};
PasswordEncrypterService.MIN_LENGTH = 6;
PasswordEncrypterService.PASSWORD_STRENGTH_REGEX = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/g;
PasswordEncrypterService = PasswordEncrypterService_1 = __decorate([
    common_1.Injectable()
], PasswordEncrypterService);
exports.PasswordEncrypterService = PasswordEncrypterService;
//# sourceMappingURL=password-encrypter.service.js.map