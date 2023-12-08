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
exports.CreateUserService = void 0;
const common_1 = require("@nestjs/common");
const user_repository_1 = require("../repositories/user.repository");
const bcrypt = require("bcrypt");
let CreateUserService = class CreateUserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async create(newUserRequest) {
        newUserRequest.senha = bcrypt.hashSync(newUserRequest.senha, 8);
        try {
            const user = await this.userRepository.find({
                where: {
                    login: newUserRequest.login
                }
            });
            if (user.length > 0) {
                throw new common_1.BadRequestException(`Esse login já existe.`);
            }
            return this.userRepository.save(newUserRequest);
        }
        catch (e) {
            let errorMessage = e.message;
            if ((e === null || e === void 0 ? void 0 : e.code) === 11000)
                errorMessage = "Duplicated Index";
            throw new common_1.BadRequestException(errorMessage);
        }
    }
};
CreateUserService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [user_repository_1.UserRepository])
], CreateUserService);
exports.CreateUserService = CreateUserService;
//# sourceMappingURL=create-user.service.js.map