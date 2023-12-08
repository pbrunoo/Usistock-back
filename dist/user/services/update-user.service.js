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
exports.UpdateUserService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const user_repository_1 = require("../repositories/user.repository");
let UpdateUserService = class UpdateUserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async update(userId, updateUserRequest) {
        updateUserRequest.senha = bcrypt.hashSync(updateUserRequest.senha, 8);
        try {
            return await this.userRepository.update(userId, updateUserRequest);
        }
        catch (e) {
            throw e;
        }
    }
};
UpdateUserService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [user_repository_1.UserRepository])
], UpdateUserService);
exports.UpdateUserService = UpdateUserService;
//# sourceMappingURL=update-user.service.js.map