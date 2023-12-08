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
exports.AnalisysObjectController = void 0;
const common_1 = require("@nestjs/common");
const analysis_object_entity_1 = require("../entities/analysis-object.entity");
const analysis_object_repository_1 = require("../repositories/analysis-object.repository");
const create_analisys_object_service_1 = require("../services/create-analisys-object.service");
const analisys_object_finder_service_1 = require("../services/analisys-object-finder.service");
const swagger_1 = require("@nestjs/swagger");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const update_analisys_object_service_1 = require("../services/update-analisys-object.service");
const analisys_object_filter_1 = require("../requests/analisys-object-filter");
const analisys_object_resumed_1 = require("../dto/analisys-object-resumed");
const analisys_object_dashboard_service_1 = require("../services/analisys-object-dashboard.service");
const analisys_object_not_reported_in_time_flow_1 = require("../dto/analisys-object-not-reported-in-time-flow");
const analisys_object_not_reported_in_time_stage_1 = require("../dto/analisys-object-not-reported-in-time-stage");
const fileName = (req, file, callback) => {
    const name = file.originalname.split('.')[0];
    const arrFileName = file.originalname.split('.');
    const fileExtName = `.${arrFileName[arrFileName.length - 1]}`;
    const randomName = Array(4)
        .fill(null)
        .map(() => Math.round(Math.random() * 16).toString(16))
        .join('');
    callback(null, `${name}-${randomName}${fileExtName}`);
};
let AnalisysObjectController = class AnalisysObjectController {
    constructor(analisysObjectRepository, createAnalisysObjectService, analisysObjectFinderService, updateAnalisysObjectService, analisysObjectDashboardService) {
        this.analisysObjectRepository = analisysObjectRepository;
        this.createAnalisysObjectService = createAnalisysObjectService;
        this.analisysObjectFinderService = analisysObjectFinderService;
        this.updateAnalisysObjectService = updateAnalisysObjectService;
        this.analisysObjectDashboardService = analisysObjectDashboardService;
    }
    async create(flowId, userId, file) {
        const analisysObject = await this
            .createAnalisysObjectService
            .create(flowId, userId, file.filename);
        return analisysObject;
    }
    async getAll() {
        const analisysObjects = await this.analisysObjectFinderService.getAll();
        return analisysObjects;
    }
    async getAnalisysObjectResumedById(id) {
        console.log(id);
        const analisysObject = await this.analisysObjectFinderService.getById(id);
        return analisysObject;
    }
    async getAnalisysObjectNotReportedIntimeFlow() {
        const analisysObjects = await this.analisysObjectDashboardService.getAnalisysObjectNotReportedIntimeFlow();
        return analisysObjects;
    }
    async getAnalisysObjectNotReportedIntimeStage() {
        const analisysObjects = await this.analisysObjectDashboardService.getAnalisysObjectNotReportedIntimeStage();
        return analisysObjects;
    }
    async getnalisysObjectByFilter(analisysObjectFinderRequest) {
        const analisysObjects = await this.analisysObjectFinderService.getByFilter(analisysObjectFinderRequest);
        return analisysObjects;
    }
    async update(id) {
        await this.updateAnalisysObjectService.updateStatus(id);
    }
    async updateUser(id, userId) {
        await this.updateAnalisysObjectService.updateUser(id, userId);
    }
    async updateFlow(id, flowId) {
        await this.updateAnalisysObjectService.updateFlow(id, flowId);
    }
};
__decorate([
    common_1.Post(':flowId/:userId'),
    swagger_1.ApiConsumes('multipart/form-data'),
    swagger_1.ApiBody({
        schema: {
            type: 'object',
            properties: {
                file: {
                    type: 'string',
                    format: 'binary',
                },
            },
        },
    }),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('file', {
        storage: multer_1.diskStorage({
            destination: 'files/',
            filename: fileName,
        }),
    })),
    common_1.HttpCode(common_1.HttpStatus.CREATED),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.CREATED, type: analysis_object_entity_1.AnalisysObjectEntity }),
    __param(0, common_1.Param('flowId')), __param(1, common_1.Param('userId')), __param(2, common_1.UploadedFile()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], AnalisysObjectController.prototype, "create", null);
__decorate([
    common_1.Get('all'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.OK, type: [analysis_object_entity_1.AnalisysObjectEntity] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AnalisysObjectController.prototype, "getAll", null);
__decorate([
    common_1.Get('resumed/:id'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.OK, type: analisys_object_resumed_1.AnalisysObjectResumed }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AnalisysObjectController.prototype, "getAnalisysObjectResumedById", null);
__decorate([
    common_1.Get('dashboard-not-reported/flow'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.OK, type: analisys_object_not_reported_in_time_flow_1.AnalisysObjectNotReportedIntimeFlow }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AnalisysObjectController.prototype, "getAnalisysObjectNotReportedIntimeFlow", null);
__decorate([
    common_1.Get('dashboard-not-reported/stage'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.OK, type: analisys_object_not_reported_in_time_stage_1.AnalisysObjectNotReportedIntimeStage }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AnalisysObjectController.prototype, "getAnalisysObjectNotReportedIntimeStage", null);
__decorate([
    common_1.Put('filtered/objects'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.OK, type: [analysis_object_entity_1.AnalisysObjectEntity] }),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [analisys_object_filter_1.AnalisysObjectFinderRequest]),
    __metadata("design:returntype", Promise)
], AnalisysObjectController.prototype, "getnalisysObjectByFilter", null);
__decorate([
    common_1.Put(':id'),
    common_1.HttpCode(common_1.HttpStatus.NO_CONTENT),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.NO_CONTENT }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AnalisysObjectController.prototype, "update", null);
__decorate([
    common_1.Put('atribuition/:id/:userId'),
    common_1.HttpCode(common_1.HttpStatus.NO_CONTENT),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.NO_CONTENT }),
    __param(0, common_1.Param('id')), __param(1, common_1.Param('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AnalisysObjectController.prototype, "updateUser", null);
__decorate([
    common_1.Put('update-flow/:id/:flowId'),
    common_1.HttpCode(common_1.HttpStatus.NO_CONTENT),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.NO_CONTENT }),
    __param(0, common_1.Param('id')), __param(1, common_1.Param('flowId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AnalisysObjectController.prototype, "updateFlow", null);
AnalisysObjectController = __decorate([
    common_1.Controller('v1/analisys-object'),
    swagger_1.ApiTags('Analisys-Object'),
    __metadata("design:paramtypes", [analysis_object_repository_1.AnalisysObjectRepository,
        create_analisys_object_service_1.CreateAnalisysObjectService,
        analisys_object_finder_service_1.AnalisysObjectFinderService,
        update_analisys_object_service_1.UpdateAnalisysObjectService,
        analisys_object_dashboard_service_1.AnalisysObjectDashboardService])
], AnalisysObjectController);
exports.AnalisysObjectController = AnalisysObjectController;
//# sourceMappingURL=analisys-object.controller.js.map