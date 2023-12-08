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
exports.FuncionarioController = void 0;
const unity_empresa_dto_1 = require("./../dto/unity-empresa.dto");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const funcionario_entity_1 = require("../entities/funcionario.entity");
const new_funcionario_request_1 = require("../requests/new-funcionario.request");
const update_funcionario_request_1 = require("../requests/update-funcionario.request");
const funcionario_create_service_1 = require("../services/funcionario-create.service");
const funcionario_erase_service_1 = require("../services/funcionario-erase.service");
const funcionario_finder_service_1 = require("../services/funcionario-finder.service");
const update_funcionario_service_1 = require("../services/update-funcionario.service");
let FuncionarioController = class FuncionarioController {
    constructor(createFuncionarioService, updateFuncionarioService, funcionarioEraserService, funcionarioFinderService) {
        this.createFuncionarioService = createFuncionarioService;
        this.updateFuncionarioService = updateFuncionarioService;
        this.funcionarioEraserService = funcionarioEraserService;
        this.funcionarioFinderService = funcionarioFinderService;
    }
    async create(newFuncionarioRequest) {
        const funcionario = await this
            .createFuncionarioService
            .create(newFuncionarioRequest);
        return funcionario;
    }
    async update(id, updateFuncionarioRequest) {
        await this.updateFuncionarioService.update(id, updateFuncionarioRequest);
    }
    async getAll() {
        const funcionarios = await this.funcionarioFinderService.getAll();
        return funcionarios;
    }
    async getByCostumerName(nomeCompleto) {
        const funcionario = await this.funcionarioFinderService.getByName(nomeCompleto);
        return funcionario;
    }
    async getByFuncionarioId(id) {
        const funcionario = await this.funcionarioFinderService.getById(id);
        return funcionario;
    }
    async getFuncionarioByUnidadeId(unidadeid) {
        const funcionario = await this.funcionarioFinderService.getByUnidadeId(unidadeid);
        return funcionario;
    }
    async getUnidadeEmpresa(idFuncionario) {
        const funcionarioEmpresa = await this.funcionarioFinderService.getFuncionarioEmpresa(idFuncionario);
        return funcionarioEmpresa;
    }
    async getSearch(search) {
        const searchs = await this.funcionarioFinderService.searchAll(search);
        return searchs;
    }
    async delete(id, userId) {
        await this.funcionarioEraserService.delete(id, userId);
    }
};
__decorate([
    common_1.Post(),
    common_1.HttpCode(common_1.HttpStatus.CREATED),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.CREATED, type: funcionario_entity_1.FuncionarioEntity }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [new_funcionario_request_1.NewFuncionarioRequest]),
    __metadata("design:returntype", Promise)
], FuncionarioController.prototype, "create", null);
__decorate([
    common_1.Put(':id'),
    common_1.HttpCode(common_1.HttpStatus.NO_CONTENT),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.NO_CONTENT }),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_funcionario_request_1.UpdateFuncionarioRequest]),
    __metadata("design:returntype", Promise)
], FuncionarioController.prototype, "update", null);
__decorate([
    common_1.Get('all'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.OK, type: [funcionario_entity_1.FuncionarioEntity] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FuncionarioController.prototype, "getAll", null);
__decorate([
    common_1.Get(':nomeCompleto'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.OK, type: funcionario_entity_1.FuncionarioEntity }),
    __param(0, common_1.Param('nomeCompleto')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FuncionarioController.prototype, "getByCostumerName", null);
__decorate([
    common_1.Get('unique/:id'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.OK, type: funcionario_entity_1.FuncionarioEntity }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FuncionarioController.prototype, "getByFuncionarioId", null);
__decorate([
    common_1.Get('all/:unidadeid'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.OK, type: String }),
    __param(0, common_1.Param('unidadeid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FuncionarioController.prototype, "getFuncionarioByUnidadeId", null);
__decorate([
    common_1.Get('all/funcEmpresa/:idFuncionario'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.OK, type: [unity_empresa_dto_1.UnityFuncionarioEmpresa] }),
    __param(0, common_1.Param('idFuncionario')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FuncionarioController.prototype, "getUnidadeEmpresa", null);
__decorate([
    common_1.Get('sch/:search'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.OK, type: String }),
    __param(0, common_1.Param('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FuncionarioController.prototype, "getSearch", null);
__decorate([
    common_1.Delete(':id/:userId'),
    common_1.HttpCode(common_1.HttpStatus.NO_CONTENT),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.NO_CONTENT }),
    __param(0, common_1.Param('id')), __param(1, common_1.Param('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], FuncionarioController.prototype, "delete", null);
FuncionarioController = __decorate([
    common_1.Controller('v1/funcionario'),
    swagger_1.ApiTags('Funcionario'),
    __metadata("design:paramtypes", [funcionario_create_service_1.CreateFuncionarioService,
        update_funcionario_service_1.UpdateFuncionarioService,
        funcionario_erase_service_1.FuncionarioEraserService,
        funcionario_finder_service_1.FuncionarioFinderService])
], FuncionarioController);
exports.FuncionarioController = FuncionarioController;
//# sourceMappingURL=funcionario.controller.js.map