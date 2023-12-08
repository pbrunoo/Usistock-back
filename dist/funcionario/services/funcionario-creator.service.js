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
exports.CreateFuncionarioService = void 0;
const common_1 = require("@nestjs/common");
const funcionario_repository_1 = require("../repositories/funcionario.repository");
let CreateFuncionarioService = class CreateFuncionarioService {
    constructor(funcionarioRepository) {
        this.funcionarioRepository = funcionarioRepository;
    }
    async create(newFuncionarioRequest) {
        try {
            const funcionario = await this.funcionarioRepository.find({
                where: {
                    cpf: newFuncionarioRequest.cpf
                }
            });
            if (funcionario.length > 0) {
                throw new common_1.BadRequestException('Esse Funcionário já existe.');
            }
            return this.funcionarioRepository.save(newFuncionarioRequest);
        }
        catch (e) {
            let errorMessage = e.message;
            if ((e === null || e === void 0 ? void 0 : e.code) === 11000)
                errorMessage = "Dupblicated Index";
            throw new common_1.BadRequestException(errorMessage);
        }
    }
};
CreateFuncionarioService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [funcionario_repository_1.FuncionarioRepository])
], CreateFuncionarioService);
exports.CreateFuncionarioService = CreateFuncionarioService;
//# sourceMappingURL=funcionario-creator.service.js.map