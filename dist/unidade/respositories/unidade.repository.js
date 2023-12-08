"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnidadeRepository = void 0;
const typeorm_1 = require("typeorm");
const unidade_entity_1 = require("../entities/unidade.entity");
let UnidadeRepository = class UnidadeRepository extends typeorm_1.Repository {
    async getAll() {
        const unidades = await this.find({
            where: {
                status: 1
            }
        });
        return unidades;
    }
    async getUnidadeByUnidadeId(unidadeId) {
        const unidade = await this.find({
            where: {
                id: unidadeId.toString(),
                status: 1
            }
        });
        return unidade;
    }
    async findSearch(search) {
        const result = await this.find({
            where: {
                $or: [
                    { id: { $regex: search, $options: 'i' } },
                    { nomeUnidade: { $regex: search, $options: 'i' } },
                    { idEmpresa: { $regex: search, $options: 'i' } },
                ],
                status: 1
            }
        });
        return result;
    }
};
UnidadeRepository = __decorate([
    typeorm_1.EntityRepository(unidade_entity_1.UnidadeEntity)
], UnidadeRepository);
exports.UnidadeRepository = UnidadeRepository;
//# sourceMappingURL=unidade.repository.js.map