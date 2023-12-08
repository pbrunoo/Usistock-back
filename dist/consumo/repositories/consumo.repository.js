"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsumoRepository = void 0;
const typeorm_1 = require("typeorm");
const consumo_entity_1 = require("../entities/consumo.entity");
let ConsumoRepository = class ConsumoRepository extends typeorm_1.Repository {
    async getAll() {
        const consumo = await this.find({
            where: {
                status: 1
            }
        });
        return consumo;
    }
    async getConsumoByUnidadeId(unidadeId) {
        const consumo = await this.find({
            where: {
                unidadeId: unidadeId.toString(),
                status: 1
            }
        });
        return consumo;
    }
    async searchFind(search, unidadeId) {
        const result = await this.find({
            where: {
                $or: [
                    { id: { $regex: search, $options: 'i' } },
                    { produto: { $regex: search, $options: 'i' } },
                    { fornecedor: { $regex: search, $options: 'i' } }
                ]
            }
        });
        return result;
    }
};
ConsumoRepository = __decorate([
    typeorm_1.EntityRepository(consumo_entity_1.ConsumoEntity)
], ConsumoRepository);
exports.ConsumoRepository = ConsumoRepository;
//# sourceMappingURL=consumo.repository.js.map