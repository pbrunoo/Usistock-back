"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteRepository = void 0;
const typeorm_1 = require("typeorm");
const cliente_entity_1 = require("../entities/cliente.entity");
let ClienteRepository = class ClienteRepository extends typeorm_1.Repository {
    async getAll() {
        const clientes = await this.find({});
        return clientes;
    }
    async getClienteByUnidadeId(unidadeId) {
        const cliente = await this.find({
            where: {
                unidadeId: unidadeId.toString(),
                status: 1
            }
        });
        return cliente;
    }
    async findSearch(search, unidadeId) {
        const result = await this.find({
            where: {
                $or: [
                    { id: { $regex: search, $options: 'i' } },
                    { inscEstadual: { $regex: search, $options: 'i' } },
                    { cpfCnpj: { $regex: search, $options: 'i' } },
                    { razaoSocial: { $regex: search, $options: 'i' } },
                    { telefone: { $regex: search, $options: 'i' } },
                    { email: { $regex: search, $options: 'i' } },
                    { cidade: { $regex: search, $options: 'i' } },
                ],
                unidadeId: unidadeId,
                status: 1
            }
        });
        return result;
    }
};
ClienteRepository = __decorate([
    typeorm_1.EntityRepository(cliente_entity_1.ClienteEntity)
], ClienteRepository);
exports.ClienteRepository = ClienteRepository;
//# sourceMappingURL=cliente.repository.js.map