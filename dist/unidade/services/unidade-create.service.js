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
exports.CreateUnidadeService = void 0;
const common_1 = require("@nestjs/common");
const unidade_repository_1 = require("../respositories/unidade.repository");
let CreateUnidadeService = class CreateUnidadeService {
    constructor(unidadeRepository) {
        this.unidadeRepository = unidadeRepository;
    }
    async create(newUnidadeRequest) {
        try {
            const unidade = await this.unidadeRepository.find({
                where: {
                    nomeUnidade: newUnidadeRequest.nomeUnidade
                }
            });
            if (unidade.length > 0) {
                throw new common_1.BadRequestException('Essa unidade já existe.');
            }
            return this.unidadeRepository.save(newUnidadeRequest);
        }
        catch (e) {
            let errorMessage = e.message;
            if ((e === null || e === void 0 ? void 0 : e.code) === 11000)
                errorMessage = "Dupblicated Index";
            throw new common_1.BadRequestException(errorMessage);
        }
    }
};
CreateUnidadeService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [unidade_repository_1.UnidadeRepository])
], CreateUnidadeService);
exports.CreateUnidadeService = CreateUnidadeService;
//# sourceMappingURL=unidade-create.service.js.map