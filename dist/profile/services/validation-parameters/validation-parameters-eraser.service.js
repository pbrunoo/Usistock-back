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
exports.ValidationParametersEraserService = void 0;
const common_1 = require("@nestjs/common");
const profile_repository_1 = require("../../repositories/profile.repository");
let ValidationParametersEraserService = class ValidationParametersEraserService {
    constructor(profileRepository) {
        this.profileRepository = profileRepository;
    }
    async erase(profileId, customerMetaData) {
        const profile = await this.profileRepository.findOne(profileId);
        profile.deleteValidationParameters(customerMetaData);
        await this.profileRepository.save(profile);
    }
};
ValidationParametersEraserService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [profile_repository_1.ProfileRepository])
], ValidationParametersEraserService);
exports.ValidationParametersEraserService = ValidationParametersEraserService;
//# sourceMappingURL=validation-parameters-eraser.service.js.map