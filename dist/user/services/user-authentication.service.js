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
exports.UserAutenticationService = void 0;
const jwt_token_generator_service_1 = require("./../../authentication/services/jwt-token-generator.service");
const password_encrypter_service_1 = require("./../../common/services/password-encrypter.service");
const common_1 = require("@nestjs/common");
const invalid_credentials_exception_1 = require("../exceptions/invalid-credentials.exception");
const user_repository_1 = require("../repositories/user.repository");
let UserAutenticationService = class UserAutenticationService {
    constructor(userRepository, passwordEncrypterService, jwtTokenGeneratorService) {
        this.userRepository = userRepository;
        this.passwordEncrypterService = passwordEncrypterService;
        this.jwtTokenGeneratorService = jwtTokenGeneratorService;
    }
    async authenticate(userSignin) {
        const user = await this.userRepository.findByLogin(userSignin.login);
        if (!user) {
            throw new invalid_credentials_exception_1.InvalidCredentialsException();
        }
        const isPasswordValid = this
            .passwordEncrypterService
            .passwordIsAMatch(userSignin.password, user.senha);
        if (!isPasswordValid) {
            throw new invalid_credentials_exception_1.InvalidCredentialsException();
        }
        const jwtToken = this
            .jwtTokenGeneratorService
            .generateWithPayLoad({
            sub: user.id.toString(),
            subscriptionId: user.nivelAcesso,
            roles: user.login
        });
        return jwtToken;
    }
};
UserAutenticationService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [user_repository_1.UserRepository,
        password_encrypter_service_1.PasswordEncrypterService,
        jwt_token_generator_service_1.JWTTokenGeneratorService])
], UserAutenticationService);
exports.UserAutenticationService = UserAutenticationService;
//# sourceMappingURL=user-authentication.service.js.map