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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("../entities/user.entity");
const new_user_1 = require("../requests/new-user");
const create_user_service_1 = require("../services/create-user.service");
const swagger_1 = require("@nestjs/swagger");
const update_user_service_1 = require("../services/update-user.service");
const user_eraser_service_1 = require("../services/user-eraser.service");
const user_finder_service_1 = require("../services/user-finder.service");
const update_user_1 = require("../requests/update-user");
const UserSignInRequest_1 = require("../requests/UserSignInRequest");
const user_authentication_service_1 = require("../services/user-authentication.service");
const token_decoded_decorator_1 = require("../../authentication/decorators/token-decoded.decorator");
let UserController = class UserController {
    constructor(createUserService, updateUserService, userEraserService, userFinderService, userAuthenticationService) {
        this.createUserService = createUserService;
        this.updateUserService = updateUserService;
        this.userEraserService = userEraserService;
        this.userFinderService = userFinderService;
        this.userAuthenticationService = userAuthenticationService;
    }
    async create(newUserRequest) {
        const user = await this
            .createUserService
            .create(newUserRequest);
        return user;
    }
    async update(id, updateUserRequest) {
        await this.updateUserService.update(id, updateUserRequest);
    }
    async getAll() {
        const users = await this.userFinderService.getAll();
        return users;
    }
    async getSearch(search, unidadeid) {
        const searchs = await this.userFinderService.searchAll(search, unidadeid);
        return searchs;
    }
    async getByUserId(id) {
        const user = await this.userFinderService.getById(id);
        return user;
    }
    async delete(id) {
        await this.userEraserService.delete(id);
    }
    async getUsersByUnidadeId(unidadeid) {
        const users = await this.userFinderService.getByUnidadeId(unidadeid);
        return users;
    }
    async signIn(clientSignin) {
        const token = await this
            .userAuthenticationService
            .authenticate(clientSignin);
        return token;
    }
};
__decorate([
    common_1.Post(),
    common_1.HttpCode(common_1.HttpStatus.CREATED),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.CREATED, type: user_entity_1.UserEntity }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [new_user_1.NewUserRequest]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "create", null);
__decorate([
    common_1.Put(':id'),
    common_1.HttpCode(common_1.HttpStatus.NO_CONTENT),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.NO_CONTENT }),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_1.UpdateUserRequest]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "update", null);
__decorate([
    common_1.Get('all'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.OK, type: [user_entity_1.UserEntity] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getAll", null);
__decorate([
    common_1.Get('sch/:search/:unidadeid'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.OK, type: String }),
    __param(0, common_1.Param('search')), __param(1, common_1.Param('unidadeid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getSearch", null);
__decorate([
    common_1.Get('unique/:id'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.OK, type: user_entity_1.UserEntity }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getByUserId", null);
__decorate([
    common_1.Delete(':id'),
    common_1.HttpCode(common_1.HttpStatus.NO_CONTENT),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.NO_CONTENT }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "delete", null);
__decorate([
    common_1.Get('all/:unidadeid'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.OK, type: String }),
    __param(0, common_1.Param('unidadeid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUsersByUnidadeId", null);
__decorate([
    common_1.Post('signin'),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.OK, type: String }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserSignInRequest_1.UserSignInRequest]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "signIn", null);
UserController = __decorate([
    common_1.Controller('v1/user'),
    swagger_1.ApiTags('User'),
    __metadata("design:paramtypes", [create_user_service_1.CreateUserService,
        update_user_service_1.UpdateUserService,
        user_eraser_service_1.UserEraserService,
        user_finder_service_1.UserFinderService,
        user_authentication_service_1.UserAutenticationService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map