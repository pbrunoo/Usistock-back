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
exports.AnalisysObjectDetailsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const analisys_object_details_reader_service_1 = require("../services/analisys-object-details/analisys-object-details-reader.service");
const analisys_object_details_1 = require("../entities/aggregates/analisys-object-details");
const task_queue_finder_service_1 = require("../../tasks-queue/services/task-queue-finder.service");
let AnalisysObjectDetailsController = class AnalisysObjectDetailsController {
    constructor(analisysObjectDetailsReaderService, taskQueueFinderService) {
        this.analisysObjectDetailsReaderService = analisysObjectDetailsReaderService;
        this.taskQueueFinderService = taskQueueFinderService;
    }
    async getAll(id) {
        const analisysObjectDetails = await this.analisysObjectDetailsReaderService.getAll(id);
        return analisysObjectDetails;
    }
    async getById(id, detailId) {
        const analisysObjectDetail = await this.analisysObjectDetailsReaderService.getById(id, detailId);
        return analisysObjectDetail;
    }
    async getManualTasks(id, detailId) {
        const analisysObjectDetail = await this.analisysObjectDetailsReaderService.getById(id, detailId);
        const manualTasks = await this.taskQueueFinderService.getByAnalisysObjectManual(analisysObjectDetail.id.toHexString());
        return manualTasks;
    }
    async getAutoTasks(id, detailId) {
        const analisysObjectDetail = await this.analisysObjectDetailsReaderService.getById(id, detailId);
        const manualTasks = await this.taskQueueFinderService.getByAnalisysObjectAuto(analisysObjectDetail.id.toHexString());
        return manualTasks;
    }
};
__decorate([
    common_1.Get(':id'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.OK, type: [analisys_object_details_1.AnalisysObjectDetails] }),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AnalisysObjectDetailsController.prototype, "getAll", null);
__decorate([
    common_1.Get('my-analisys/:id/:detailId'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.OK, type: analisys_object_details_1.AnalisysObjectDetails }),
    __param(0, common_1.Param('id')), __param(1, common_1.Param('detailId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AnalisysObjectDetailsController.prototype, "getById", null);
__decorate([
    common_1.Get('manual-tasks/:id/:detailId'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.OK, type: analisys_object_details_1.AnalisysObjectDetails }),
    __param(0, common_1.Param('id')), __param(1, common_1.Param('detailId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AnalisysObjectDetailsController.prototype, "getManualTasks", null);
__decorate([
    common_1.Get('auto-tasks/:id/:detailId'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({ status: common_1.HttpStatus.OK, type: analisys_object_details_1.AnalisysObjectDetails }),
    __param(0, common_1.Param('id')), __param(1, common_1.Param('detailId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AnalisysObjectDetailsController.prototype, "getAutoTasks", null);
AnalisysObjectDetailsController = __decorate([
    common_1.Controller('v1/analisys-object/analisys-object-details'),
    swagger_1.ApiTags('Analisys-Object'),
    __metadata("design:paramtypes", [analisys_object_details_reader_service_1.AnalisysObjectDetailsReaderService,
        task_queue_finder_service_1.TaskQueueFinderService])
], AnalisysObjectDetailsController);
exports.AnalisysObjectDetailsController = AnalisysObjectDetailsController;
//# sourceMappingURL=analisys-object-details.controller.js.map