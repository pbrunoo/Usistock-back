"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlackListRepository = void 0;
const typeorm_1 = require("typeorm");
const blacklist_entity_1 = require("../entities/blacklist.entity");
let BlackListRepository = class BlackListRepository extends typeorm_1.Repository {
    async getAll() {
        const blacklists = await this.find({});
        return blacklists;
    }
};
BlackListRepository = __decorate([
    typeorm_1.EntityRepository(blacklist_entity_1.BlackListEntity)
], BlackListRepository);
exports.BlackListRepository = BlackListRepository;
//# sourceMappingURL=blacklist.repository.js.map