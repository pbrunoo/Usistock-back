"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const new_unidade_request_1 = require("../../unidade/requests/new-unidade.request");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../entities/user.entity");
let UserRepository = class UserRepository extends typeorm_1.Repository {
    constructor() {
        super(...arguments);
        this.newUnidadeRequest = new_unidade_request_1.NewUnidadeRequest;
    }
    async getAll() {
        const users = await this.find({});
        return users;
    }
    async getUserByUnidadeId(unidadeId) {
        const users = await this.find({
            where: {
                unidadeId: unidadeId.toString(),
                status: 1
            }
        });
        return users;
    }
    findByLogin(login) {
        return this.findOne({
            where: {
                login: login,
                status: 1
            }
        });
    }
    async findSearch(search, unidadeId) {
        const result = await this.find({
            where: {
                $or: [
                    { id: { $regex: search, $options: 'i' } },
                    { login: { $regex: search, $options: 'i' } },
                    { nome: { $regex: search, $options: 'i' } },
                    { email: { $regex: search, $options: 'i' } },
                    { telefone: { $regex: search, $options: 'i' } },
                    { cidade: { $regex: search, $options: 'i' } }
                ],
                unidadeId: unidadeId,
                status: 1
            }
        });
        return result;
    }
};
UserRepository = __decorate([
    typeorm_1.EntityRepository(user_entity_1.UserEntity)
], UserRepository);
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map