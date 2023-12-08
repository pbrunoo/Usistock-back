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
const unidade_repository_1 = require("../../respositories/unidade.repository");
let ValidationControllersReaderService = class ValidationControllersReaderService {
    constructor(unidadeRepository) {
        this.unidadeRepository = unidadeRepository;
    }
    async getAllValidationControllers(unidadeId) {
        const unidade = await this.unidadeRepository.findOne(unidadeId);
        return unidade.validationControllers;
    }
};
ValidationControllersReaderService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [unidade_repository_1.UnidadeRepository])
], ValidationControllersReaderService);
exports.ValidationControllersReaderService = ValidationControllersReaderService;
//# sourceMappingURL=validation-controller-reader.service.js.map