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
exports.SourceController = void 0;
const common_1 = require("@nestjs/common");
const source_entity_1 = require("../entities/source.entity");
const new_source_1 = require("../requests/new-source");
const create_source_service_1 = require("../services/create-source.service");
const swagger_1 = require("@nestjs/swagger");
const update_source_service_1 = require("../services/update-source.service");
const source_eraser_service_1 = require("../services/source-eraser.service");
const source_finder_service_1 = require("../services/source-finder.service");
const update_source_1 = require("../requests/update-source");
let SourceController = class SourceController {
    constructor(createSourceService, updateSourceService, sourceEraserService, sourceFinderService) {
        this.createSourceService = createSourceService;
        this.updateSourceService = updateSourceService;
        this.sourceEraserService = sourceEraserService;
        this.sourceFinderService = sourceFinderService;
    }
    async create(createSourceRequest) {
        const source = await this
            .createSourceService
            .create(createSourceRequest);
        return source;
    }
    async update(id, upodateSourceRequest) {
        await this.updateSourceService.update(id, upodateSourceRequest);
    }
    async getAll() {
        const blacklists = await this.sourceFinderService.getAll();
        return blacklists;
    }
    async getByCostumerName(sourceName) {
        const source = await this.sourceFinderService.getByCostumerName(sourceName);
        return source;
    }
    async delete(id) {
        await this.sourceEraserService.delete(id);
    }
};
__decorate([
    common_1.Post(),
    common_1.HttpCode(common_1.HttpStatus.CREATED),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.CREATED, type: source_entity_1.SourcetEntity }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [new_source_1.NewSourceRequest]),
    __metadata("design:returntype", Promise)
], SourceController.prototype, "create", null);
__decorate([
    common_1.Put(':id'),
    common_1.HttpCode(common_1.HttpStatus.NO_CONTENT),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.NO_CONTENT }),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_source_1.UpdateSourceRequest]),
    __metadata("design:returntype", Promise)
], SourceController.prototype, "update", null);
__decorate([
    common_1.Get('all'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.OK, type: [source_entity_1.SourcetEntity] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SourceController.prototype, "getAll", null);
__decorate([
    common_1.Get(':sourceName'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.OK, type: source_entity_1.SourcetEntity }),
    __param(0, common_1.Param('sourceName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SourceController.prototype, "getByCostumerName", null);
__decorate([
    common_1.Delete(':id'),
    common_1.HttpCode(common_1.HttpStatus.NO_CONTENT),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.NO_CONTENT }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SourceController.prototype, "delete", null);
SourceController = __decorate([
    common_1.Controller('v1/source'),
    swagger_1.ApiTags('Source'),
    __metadata("design:paramtypes", [create_source_service_1.CreateSourceService,
        update_source_service_1.UpdateSourceService,
        source_eraser_service_1.SourceEraserService,
        source_finder_service_1.SourceFinderService])
], SourceController);
exports.SourceController = SourceController;
//# sourceMappingURL=source.controller.js.map