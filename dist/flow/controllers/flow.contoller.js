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
exports.FlowController = void 0;
const common_1 = require("@nestjs/common");
const flow_entity_1 = require("../entities/flow.entity");
const new_flow_1 = require("../requests/new-flow");
const swagger_1 = require("@nestjs/swagger");
const update_flow_1 = require("../requests/update-flow");
const create_flow_service_1 = require("../services/create-flow.service");
const update_flow_service_1 = require("../services/update-flow.service");
const flow_eraser_service_1 = require("../services/flow-eraser.service");
const flow_finder_service_1 = require("../services/flow-finder.service");
let FlowController = class FlowController {
    constructor(createFlowService, updateFlowService, flowEraserService, flowFinderService) {
        this.createFlowService = createFlowService;
        this.updateFlowService = updateFlowService;
        this.flowEraserService = flowEraserService;
        this.flowFinderService = flowFinderService;
    }
    async create(createSourceRequest) {
        const source = await this
            .createFlowService
            .create(createSourceRequest);
        return source;
    }
    async update(id, upodateSourceRequest) {
        await this.updateFlowService.update(id, upodateSourceRequest);
    }
    async getAll() {
        const flows = await this.flowFinderService.getAll();
        return flows;
    }
    async delete(id) {
        await this.flowEraserService.delete(id);
    }
};
__decorate([
    common_1.Post(),
    common_1.HttpCode(common_1.HttpStatus.CREATED),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.CREATED, type: flow_entity_1.FlowEntity }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [new_flow_1.NewFlowRequest]),
    __metadata("design:returntype", Promise)
], FlowController.prototype, "create", null);
__decorate([
    common_1.Put(':id'),
    common_1.HttpCode(common_1.HttpStatus.NO_CONTENT),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.NO_CONTENT }),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_flow_1.UpdateFlowRequest]),
    __metadata("design:returntype", Promise)
], FlowController.prototype, "update", null);
__decorate([
    common_1.Get('all'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.OK, type: [flow_entity_1.FlowEntity] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FlowController.prototype, "getAll", null);
__decorate([
    common_1.Delete(':id'),
    common_1.HttpCode(common_1.HttpStatus.NO_CONTENT),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.NO_CONTENT }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FlowController.prototype, "delete", null);
FlowController = __decorate([
    common_1.Controller('v1/flow'),
    swagger_1.ApiTags('Flow'),
    __metadata("design:paramtypes", [create_flow_service_1.CreateFlowService,
        update_flow_service_1.UpdateFlowService,
        flow_eraser_service_1.FlowEraserService,
        flow_finder_service_1.FLowFinderService])
], FlowController);
exports.FlowController = FlowController;
//# sourceMappingURL=flow.contoller.js.map