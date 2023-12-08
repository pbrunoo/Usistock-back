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
exports.ValidationControllersReaderService = void 0;
const common_1 = require("@nestjs/common");
const empresa_respository_1 = require("../../repositories/empresa.respository");
let ValidationControllersReaderService = class ValidationControllersReaderService {
    constructor(empresaRepository) {
        this.empresaRepository = empresaRepository;
    }
    async getAllValidationControllers(empresaId) {
        const empresa = await this.empresaRepository.findOne(empresaId);
        return empresa.validationControllers;
    }
};
ValidationControllersReaderService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [empresa_respository_1.EmpresaRepository])
], ValidationControllersReaderService);
exports.ValidationControllersReaderService = ValidationControllersReaderService;
//# sourceMappingURL=validation-controller-reader.service.js.map