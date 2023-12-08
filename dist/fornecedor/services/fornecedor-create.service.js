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
exports.CreateFornecedorService = void 0;
const common_1 = require("@nestjs/common");
const fornecedor_repository_1 = require("../repositories/fornecedor.repository");
let CreateFornecedorService = class CreateFornecedorService {
    constructor(fornecedorRepository) {
        this.fornecedorRepository = fornecedorRepository;
    }
    async create(newFornecedorRequest) {
        try {
            const fornecedor = await this.fornecedorRepository.find({
                where: {
                    razaoSocial: newFornecedorRequest.razaoSocial
                }
            });
            if (fornecedor.length > 0) {
                throw new common_1.BadRequestException('Esse Fornecedor já existe.');
            }
            return this.fornecedorRepository.save(newFornecedorRequest);
        }
        catch (e) {
            let errorMessage = e.message;
            if ((e === null || e === void 0 ? void 0 : e.code) === 11000)
                errorMessage = "Dupblicated Index";
            throw new common_1.BadRequestException(errorMessage);
        }
    }
};
CreateFornecedorService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [fornecedor_repository_1.FornecedorRepository])
], CreateFornecedorService);
exports.CreateFornecedorService = CreateFornecedorService;
//# sourceMappingURL=fornecedor-create.service.js.map