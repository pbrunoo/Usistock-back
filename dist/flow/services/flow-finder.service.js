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
exports.FLowFinderService = void 0;
const common_1 = require("@nestjs/common");
const flow_repository_1 = require("../repositories/flow.repository");
let FLowFinderService = class FLowFinderService {
    constructor(flowRepository) {
        this.flowRepository = flowRepository;
    }
    async getAll() {
        const blacklists = await this.flowRepository.getAll();
        return blacklists;
    }
    async getByCostumerName(costumerName) {
        const blacklist = await this.flowRepository.find({
            costumerName: costumerName
        });
        return blacklist;
    }
};
FLowFinderService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [flow_repository_1.FlowRepository])
], FLowFinderService);
exports.FLowFinderService = FLowFinderService;
//# sourceMappingURL=flow-finder.service.js.map