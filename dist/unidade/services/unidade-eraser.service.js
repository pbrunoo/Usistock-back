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
exports.UnidadeEraserService = void 0;
const common_1 = require("@nestjs/common");
const unidade_repository_1 = require("../respositories/unidade.repository");
let UnidadeEraserService = class UnidadeEraserService {
    constructor(unidadeRepository) {
        this.unidadeRepository = unidadeRepository;
    }
    async delete(id, userId) {
        const unidade = await this.unidadeRepository.findOne(id);
        unidade.status = 0;
        unidade.deletedUserId = userId;
        unidade.deletedAt = new Date();
        await this.unidadeRepository.save(unidade);
    }
};
UnidadeEraserService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [unidade_repository_1.UnidadeRepository])
], UnidadeEraserService);
exports.UnidadeEraserService = UnidadeEraserService;
//# sourceMappingURL=unidade-eraser.service.js.map