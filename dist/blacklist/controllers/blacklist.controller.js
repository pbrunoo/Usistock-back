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
exports.BlacklistController = void 0;
const common_1 = require("@nestjs/common");
const blacklist_entity_1 = require("../entities/blacklist.entity");
const new_blacklist_1 = require("../requests/new-blacklist");
const create_blacklist_service_1 = require("../services/create-blacklist.service");
const swagger_1 = require("@nestjs/swagger");
const update_blacklist_service_1 = require("../services/update-blacklist.service");
const blacklist_eraser_service_1 = require("../services/blacklist-eraser.service");
const blacklist_finder_service_1 = require("../services/blacklist-finder.service");
const update_blacklist_1 = require("../requests/update-blacklist");
let BlacklistController = class BlacklistController {
    constructor(createBlackListService, updateBlackListService, blacklistEraserService, blacklistFinderService) {
        this.createBlackListService = createBlackListService;
        this.updateBlackListService = updateBlackListService;
        this.blacklistEraserService = blacklistEraserService;
        this.blacklistFinderService = blacklistFinderService;
    }
    async create(createAnalisysObjectRequest) {
        const blacklist = await this
            .createBlackListService
            .create(createAnalisysObjectRequest);
        return blacklist;
    }
    async update(id, upodateBlacklistRequest) {
        await this.updateBlackListService.update(id, upodateBlacklistRequest);
    }
    async getAll() {
        const blacklists = await this.blacklistFinderService.getAll();
        return blacklists;
    }
    async getByCostumerName(costumerName) {
        const source = await this.blacklistFinderService.getByCostumerName(costumerName);
        return source;
    }
    async delete(id) {
        await this.blacklistEraserService.delete(id);
    }
};
__decorate([
    common_1.Post(),
    common_1.HttpCode(common_1.HttpStatus.CREATED),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.CREATED, type: blacklist_entity_1.BlackListEntity }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [new_blacklist_1.NewBlacklistRequest]),
    __metadata("design:returntype", Promise)
], BlacklistController.prototype, "create", null);
__decorate([
    common_1.Put(':id'),
    common_1.HttpCode(common_1.HttpStatus.NO_CONTENT),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.NO_CONTENT }),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_blacklist_1.UpodateBlacklistRequest]),
    __metadata("design:returntype", Promise)
], BlacklistController.prototype, "update", null);
__decorate([
    common_1.Get('all'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.OK, type: [blacklist_entity_1.BlackListEntity] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BlacklistController.prototype, "getAll", null);
__decorate([
    common_1.Get(':costumerName'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.OK, type: blacklist_entity_1.BlackListEntity }),
    __param(0, common_1.Param('costumerName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BlacklistController.prototype, "getByCostumerName", null);
__decorate([
    common_1.Delete(':id'),
    common_1.HttpCode(common_1.HttpStatus.NO_CONTENT),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.NO_CONTENT }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BlacklistController.prototype, "delete", null);
BlacklistController = __decorate([
    common_1.Controller('v1/blacklist'),
    swagger_1.ApiTags('Blacklist'),
    __metadata("design:paramtypes", [create_blacklist_service_1.CreateBlackListService,
        update_blacklist_service_1.UpdateBlackListService,
        blacklist_eraser_service_1.BlacklistEraserService,
        blacklist_finder_service_1.BlacklistFinderService])
], BlacklistController);
exports.BlacklistController = BlacklistController;
//# sourceMappingURL=blacklist.controller.js.map