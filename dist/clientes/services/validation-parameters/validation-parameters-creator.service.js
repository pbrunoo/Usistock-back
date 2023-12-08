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
const validation_parameters_1 = require("../../entities/agreggate/validation-parameters");
const cliente_repository_1 = require("../../repositories/cliente.repository");
const validation_parameters_request_1 = require("../../requests/validation-parameters/validation-parameters.request");
let ValidationParametersCreatorService = class ValidationParametersCreatorService {
    constructor(clienteRepository) {
        this.clienteRepository = clienteRepository;
    }
    async create(clienteId, newValidationParameters) {
        const cliente = await this.clienteRepository.findOne(clienteId);
        const validationParameterIndex = cliente.validationParameters
            .findIndex(validationParameters => validationParameters.userCreated === newValidationParameters.userCreated);
        if (validationParameterIndex !== -1) {
            throw new common_1.BadRequestException(`This analysis object already exists for this profile.`);
        }
        const validationParameters = new validation_parameters_1.ValidationParameters({
            userCreated: newValidationParameters.userCreated,
            userUpdated: newValidationParameters.userUpdated,
            createdAt: newValidationParameters.createdAt,
            updateAt: newValidationParameters.updateAt
        });
        cliente.addValidationParameters(validationParameters);
        await this.clienteRepository.save(cliente);
        return cliente;
    }
};
ValidationParametersCreatorService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [cliente_repository_1.ClienteRepository])
], ValidationParametersCreatorService);
exports.ValidationParametersCreatorService = ValidationParametersCreatorService;
//# sourceMappingURL=validation-parameters-creator.service.js.map