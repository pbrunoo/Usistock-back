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
exports.AnalisysObjectFinderService = void 0;
const common_1 = require("@nestjs/common");
const flow_repository_1 = require("../../../flow/repositories/flow.repository");
const analisys_object_resumed_1 = require("../dto/analisys-object-resumed");
const analysis_object_repository_1 = require("../repositories/analysis-object.repository");
let AnalisysObjectFinderService = class AnalisysObjectFinderService {
    constructor(analisysObjectlRepository, flowRepository) {
        this.analisysObjectlRepository = analisysObjectlRepository;
        this.flowRepository = flowRepository;
    }
    async getAll() {
        const analisysObjects = await this.analisysObjectlRepository.getAll();
        return analisysObjects;
    }
    async getById(id) {
        const analisysObject = await this.analisysObjectlRepository.findOne(id);
        const flow = await this.flowRepository.findOne(analisysObject.flowId);
        const analisysObjectResumed = new analisys_object_resumed_1.AnalisysObjectResumed({
            id: analisysObject.id,
            firstTime: analisysObject.firstTime,
            flow: flow.name,
            status: analisysObject.status,
            statusFile: analisysObject.statusFile,
            totalSend: 10,
            totalImport: 10,
            totalRejected: 0,
            totalDuplicatedFlow: 0,
            totalDuplicatedFile: 0,
            totalIssue: 0,
            analisysObjectDetails: analisysObject.analisysObjectDetails,
            userId: analisysObject.userId
        });
        return analisysObjectResumed;
    }
    async getByFilter(analisysObjectFinderRequest) {
        const analisysObjects = await this.analisysObjectlRepository.getAnalisysObcjectByFilter(analisysObjectFinderRequest);
        return analisysObjects;
    }
};
AnalisysObjectFinderService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [analysis_object_repository_1.AnalisysObjectRepository,
        flow_repository_1.FlowRepository])
], AnalisysObjectFinderService);
exports.AnalisysObjectFinderService = AnalisysObjectFinderService;
//# sourceMappingURL=analisys-object-finder.service.js.map