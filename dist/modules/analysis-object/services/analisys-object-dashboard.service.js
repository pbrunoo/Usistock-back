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
exports.AnalisysObjectDashboardService = void 0;
const common_1 = require("@nestjs/common");
const flow_repository_1 = require("../../../flow/repositories/flow.repository");
const analysis_object_repository_1 = require("../repositories/analysis-object.repository");
let AnalisysObjectDashboardService = class AnalisysObjectDashboardService {
    constructor(analisysObjectlRepository, flowRepository) {
        this.analisysObjectlRepository = analisysObjectlRepository;
        this.flowRepository = flowRepository;
    }
    async getAnalisysObjectNotReportedIntimeFlow() {
        const analisysObjectNotReportedIntimeFlow = [];
        const flows = await this.flowRepository.getAll();
        for (const flow of flows) {
            const analisysObjects = await this.analisysObjectlRepository.getAnalisysObcjectByFlow(flow.id, flow.sla);
            analisysObjectNotReportedIntimeFlow.push({
                flowName: flow.name,
                total: analisysObjects.length
            });
        }
        return analisysObjectNotReportedIntimeFlow;
    }
    async getAnalisysObjectNotReportedIntimeStage() {
        const analisysObjectNotReportedIntimeStage = [];
        const flows = await this.flowRepository.getAll();
        for (const flow of flows) {
            const analisysObjects = await this.analisysObjectlRepository.getAnalisysObcjectByFlow(flow.id, flow.sla);
            analisysObjectNotReportedIntimeStage.push({
                status: flow.name,
                total: analisysObjects.length
            });
        }
        return analisysObjectNotReportedIntimeStage;
    }
};
AnalisysObjectDashboardService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [analysis_object_repository_1.AnalisysObjectRepository,
        flow_repository_1.FlowRepository])
], AnalisysObjectDashboardService);
exports.AnalisysObjectDashboardService = AnalisysObjectDashboardService;
//# sourceMappingURL=analisys-object-dashboard.service.js.map