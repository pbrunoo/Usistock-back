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
exports.ValidationParametersReaderService = void 0;
const common_1 = require("@nestjs/common");
const validation_parameters_1 = require("../../entities/aggregates/validation-parameters");
const profile_repository_1 = require("../../repositories/profile.repository");
let ValidationParametersReaderService = class ValidationParametersReaderService {
    constructor(profileRepository) {
        this.profileRepository = profileRepository;
    }
    async getAllValidationParameters(profileId) {
        const profile = await this.profileRepository.findOne(profileId);
        return profile.validationParameters;
    }
};
ValidationParametersReaderService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [profile_repository_1.ProfileRepository])
], ValidationParametersReaderService);
exports.ValidationParametersReaderService = ValidationParametersReaderService;
//# sourceMappingURL=validation-parameters-reader.service.js.map