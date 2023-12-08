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
exports.ValidationControllerCreatorService = void 0;
const common_1 = require("@nestjs/common");
const validation_controllers_1 = require("../../entities/agreggate/validation-controllers");
const empresa_respository_1 = require("../../repositories/empresa.respository");
let ValidationControllerCreatorService = class ValidationControllerCreatorService {
    constructor(empresaRepository) {
        this.empresaRepository = empresaRepository;
    }
    async create(empresaId, newValidationControllers) {
        const empresa = await this.empresaRepository.findOne(empresaId);
        const validationEmpresaControllerIndex = empresa.validationControllers
            .findIndex(validationControllers => validationControllers.userCreated === newValidationControllers.userCreated);
        if (validationEmpresaControllerIndex !== -1) {
            const validationControllers = new validation_controllers_1.ValidationControllers({
                userCreated: newValidationControllers.userCreated,
                userUpdated: newValidationControllers.userUpdated,
                createAt: newValidationControllers.createAt,
                updateAt: newValidationControllers.updateAt
            });
            empresa.addValidationControllers(validationControllers);
            await this.empresaRepository.save(empresa);
            return empresa;
        }
    }
};
ValidationControllerCreatorService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [empresa_respository_1.EmpresaRepository])
], ValidationControllerCreatorService);
exports.ValidationControllerCreatorService = ValidationControllerCreatorService;
//# sourceMappingURL=validation-controller-creator.service.js.map