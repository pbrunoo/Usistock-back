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
exports.ValidationParametersController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const validation_parameters_reader_service_1 = require("../services/validation-parameters/validation-parameters-reader.service");
const validation_parameters_creator_service_1 = require("../services/validation-parameters/validation-parameters-creator.service");
const validation_parameters_eraser_service_1 = require("../services/validation-parameters/validation-parameters-eraser.service");
const validation_parameters_1 = require("../entities/aggregates/validation-parameters");
const new_validation_parameters_request_1 = require("../requests/validation-parameters/new-validation-parameters.request");
let ValidationParametersController = class ValidationParametersController {
    constructor(validationParametersCreatorService, validationParametersReaderService, validationParametersEraserService) {
        this.validationParametersCreatorService = validationParametersCreatorService;
        this.validationParametersReaderService = validationParametersReaderService;
        this.validationParametersEraserService = validationParametersEraserService;
    }
    async getAll(profileId) {
        const validationParameters = await this.validationParametersReaderService.getAllValidationParameters(profileId);
        return validationParameters;
    }
    async create(profileId, newValidationParametersRequest) {
        const promotion = await this
            .validationParametersCreatorService
            .create(profileId, newValidationParametersRequest);
        return promotion;
    }
    async erase(profileId, customerMetaData) {
        await this
            .validationParametersEraserService
            .erase(profileId, customerMetaData);
    }
};
__decorate([
    common_1.Get(':profileId'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.OK, type: [validation_parameters_1.ValidationParameters] }),
    __param(0, common_1.Param('profileId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ValidationParametersController.prototype, "getAll", null);
__decorate([
    common_1.Post(':profileId'),
    common_1.HttpCode(common_1.HttpStatus.CREATED),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.CREATED, type: validation_parameters_1.ValidationParameters }),
    __param(0, common_1.Param('profileId')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, new_validation_parameters_request_1.NewValidationParametersRequest]),
    __metadata("design:returntype", Promise)
], ValidationParametersController.prototype, "create", null);
__decorate([
    common_1.Delete(':profileId/:customerMetaData'),
    common_1.HttpCode(common_1.HttpStatus.NO_CONTENT),
    __param(0, common_1.Param('profileId')),
    __param(1, common_1.Param('customerMetaData')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ValidationParametersController.prototype, "erase", null);
ValidationParametersController = __decorate([
    common_1.Controller('v1/profile/validation-parameters'),
    swagger_1.ApiTags('Profile'),
    __metadata("design:paramtypes", [validation_parameters_creator_service_1.ValidationParametersCreatorService,
        validation_parameters_reader_service_1.ValidationParametersReaderService,
        validation_parameters_eraser_service_1.ValidationParametersEraserService])
], ValidationParametersController);
exports.ValidationParametersController = ValidationParametersController;
//# sourceMappingURL=validation-parameters.controller.js.map