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
exports.ValidationParametersCreatorService = void 0;
const common_1 = require("@nestjs/common");
const validation_parameters_1 = require("../../entities/aggregates/validation-parameters");
const profile_repository_1 = require("../../repositories/profile.repository");
const new_validation_parameters_request_1 = require("../../requests/validation-parameters/new-validation-parameters.request");
let ValidationParametersCreatorService = class ValidationParametersCreatorService {
    constructor(profileRepository) {
        this.profileRepository = profileRepository;
    }
    async create(profileId, newValidationParameters) {
        const profile = await this.profileRepository.findOne(profileId);
        const validationParameterIndex = profile.validationParameters
            .findIndex(validationParameter => validationParameter.customerMetaData === newValidationParameters.customerMetaData);
        if (validationParameterIndex !== -1) {
            throw new common_1.BadRequestException(`This analysis object already exists for this profile.`);
        }
        const validationParameters = new validation_parameters_1.ValidationParameters({
            customerMetaData: newValidationParameters.customerMetaData,
            condition: newValidationParameters.condition,
            value: newValidationParameters.value
        });
        profile.addValidationParameters(validationParameters);
        await this.profileRepository.save(profile);
        return profile;
    }
};
ValidationParametersCreatorService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [profile_repository_1.ProfileRepository])
], ValidationParametersCreatorService);
exports.ValidationParametersCreatorService = ValidationParametersCreatorService;
//# sourceMappingURL=validation-parameters-creator.service.js.map