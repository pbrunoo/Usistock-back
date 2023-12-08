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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const produto_1 = require("../entities/agreggate/produto");
const new_produto_request_1 = require("../requests/produto/new-produto-request");
const update_produto_request_1 = require("../requests/produto/update-produto-request");
const produto_creator_service_1 = require("../services/produto/produto-creator.service");
const produto_eraser_service_1 = require("../services/produto/produto-eraser.service");
const produto_reader_service_1 = require("../services/produto/produto-reader.service");
const produto_update_service_1 = require("../services/produto/produto-update.service");
let ProdutoController = class ProdutoController {
    constructor(produtoCreatorService, produtoReaderService, produtoEraserService, produtoUpdateService) {
        this.produtoCreatorService = produtoCreatorService;
        this.produtoReaderService = produtoReaderService;
        this.produtoEraserService = produtoEraserService;
        this.produtoUpdateService = produtoUpdateService;
    }
    async create(orcamentoId, newProdutoRequest) {
        const produto = await this
            .produtoCreatorService
            .create(orcamentoId, newProdutoRequest);
        return produto;
    }
    async update(orcamentoId, produtoId, updateProdutoRequest) {
        await this.produtoUpdateService.update(orcamentoId, produtoId, updateProdutoRequest);
        return;
    }
    async getAll(orcamentoId) {
        const produto = await this.produtoReaderService.getAllProduto(orcamentoId);
        return produto;
    }
    async delete(orcamentoId, produtoId) {
        await this.produtoEraserService.eraser(orcamentoId, produtoId);
    }
};
__decorate([
    common_1.Post(':orcamentoId'),
    common_1.HttpCode(common_1.HttpStatus.CREATED),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.CREATED, type: produto_1.Produto }),
    __param(0, common_1.Param('orcamentoId')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, new_produto_request_1.NewProdutoRequest]),
    __metadata("design:returntype", Promise)
], ProdutoController.prototype, "create", null);
__decorate([
    common_1.Put(':orcamentoId/:produtoId'),
    common_1.HttpCode(common_1.HttpStatus.NO_CONTENT),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.NO_CONTENT }),
    __param(0, common_1.Param('orcamentoId')), __param(1, common_1.Param('produtoId')), __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, update_produto_request_1.UpdateProdutoRequest]),
    __metadata("design:returntype", Promise)
], ProdutoController.prototype, "update", null);
__decorate([
    common_1.Get(':orcamentoId'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.OK, type: [produto_1.Produto] }),
    __param(0, common_1.Param('orcamentoId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProdutoController.prototype, "getAll", null);
__decorate([
    common_1.Delete(':orcamentoId/:produtoId'),
    common_1.HttpCode(common_1.HttpStatus.NO_CONTENT),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.NO_CONTENT }),
    __param(0, common_1.Param('orcamentoId')), __param(1, common_1.Param('produtoId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ProdutoController.prototype, "delete", null);
ProdutoController = __decorate([
    common_1.Controller('v1/produto/orcamento'),
    swagger_1.ApiTags('Orcamento'),
    __metadata("design:paramtypes", [produto_creator_service_1.ProdutoCreatorService,
        produto_reader_service_1.ProdutoReaderService,
        produto_eraser_service_1.ProdutoEraserService,
        produto_update_service_1.ProdutoUpdateService])
], ProdutoController);
exports.ProdutoController = ProdutoController;
//# sourceMappingURL=produto.controllers.js.map