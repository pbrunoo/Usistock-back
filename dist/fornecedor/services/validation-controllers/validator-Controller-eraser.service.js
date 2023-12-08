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
exports.ValidationControllersEraserService = void 0;
const common_1 = require("@nestjs/common");
const fornecedor_repository_1 = require("../../repositories/fornecedor.repository");
let ValidationControllersEraserService = class ValidationControllersEraserService {
    constructor(fornecedorRepository) {
        this.fornecedorRepository = fornecedorRepository;
    }
    async erase(fornecedorId, userCreated) {
        const fornecedor = await this.fornecedorRepository.findOne(fornecedorId);
        fornecedor.deleteValidationControllers(userCreated);
        await this.fornecedorRepository.save(fornecedor);
    }
};
ValidationControllersEraserService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [fornecedor_repository_1.FornecedorRepository])
], ValidationControllersEraserService);
exports.ValidationControllersEraserService = ValidationControllersEraserService;
//# sourceMappingURL=validator-Controller-eraser.service.js.map