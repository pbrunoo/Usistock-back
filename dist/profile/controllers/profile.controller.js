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
exports.ProfileController = void 0;
const common_1 = require("@nestjs/common");
const profile_entity_1 = require("../entities/profile.entity");
const new_profile_1 = require("../requests/new-profile");
const create_profile_service_1 = require("../services/create-profile.service");
const swagger_1 = require("@nestjs/swagger");
const update_profile_service_1 = require("../services/update-profile.service");
const profile_eraser_service_1 = require("../services/profile-eraser.service");
const profile_finder_service_1 = require("../services/profile-finder.service");
const update_profile_1 = require("../requests/update-profile");
let ProfileController = class ProfileController {
    constructor(createProfileService, updateProfileService, profileEraserService, profileFinderService) {
        this.createProfileService = createProfileService;
        this.updateProfileService = updateProfileService;
        this.profileEraserService = profileEraserService;
        this.profileFinderService = profileFinderService;
    }
    async create(createSourceRequest) {
        const profile = await this
            .createProfileService
            .create(createSourceRequest);
        return profile;
    }
    async update(id, upodateSourceRequest) {
        await this.updateProfileService.update(id, upodateSourceRequest);
    }
    async getAll() {
        const profiles = await this.profileFinderService.getAll();
        return profiles;
    }
    async getByCostumerName(profileName) {
        const profile = await this.profileFinderService.getByProfileName(profileName);
        return profile;
    }
    async delete(id) {
        await this.profileEraserService.delete(id);
    }
};
__decorate([
    common_1.Post(),
    common_1.HttpCode(common_1.HttpStatus.CREATED),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.CREATED, type: profile_entity_1.ProfileEntity }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [new_profile_1.NewProfileRequest]),
    __metadata("design:returntype", Promise)
], ProfileController.prototype, "create", null);
__decorate([
    common_1.Put(':id'),
    common_1.HttpCode(common_1.HttpStatus.NO_CONTENT),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.NO_CONTENT }),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_profile_1.UpdateProfileRequest]),
    __metadata("design:returntype", Promise)
], ProfileController.prototype, "update", null);
__decorate([
    common_1.Get('all'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.OK, type: [profile_entity_1.ProfileEntity] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProfileController.prototype, "getAll", null);
__decorate([
    common_1.Get(':profileName'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.OK, type: profile_entity_1.ProfileEntity }),
    __param(0, common_1.Param('profileName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProfileController.prototype, "getByCostumerName", null);
__decorate([
    common_1.Delete(':id'),
    common_1.HttpCode(common_1.HttpStatus.NO_CONTENT),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.NO_CONTENT }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProfileController.prototype, "delete", null);
ProfileController = __decorate([
    common_1.Controller('v1/profile'),
    swagger_1.ApiTags('Profile'),
    __metadata("design:paramtypes", [create_profile_service_1.CreateProfileService,
        update_profile_service_1.UpdateProfileService,
        profile_eraser_service_1.ProfileEraserService,
        profile_finder_service_1.ProfileFinderService])
], ProfileController);
exports.ProfileController = ProfileController;
//# sourceMappingURL=profile.controller.js.map