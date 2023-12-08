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
exports.CreateFlowService = void 0;
const common_1 = require("@nestjs/common");
const flow_repository_1 = require("../repositories/flow.repository");
let CreateFlowService = class CreateFlowService {
    constructor(flowRepository) {
        this.flowRepository = flowRepository;
    }
    async create(newFlowRequest) {
        try {
            const source = await this.flowRepository.find({
                where: {
                    costumerId: newFlowRequest.costumerId,
                    name: newFlowRequest.name
                }
            });
            if (source.length > 0) {
                throw new common_1.BadRequestException(`This perfil name already exists.`);
            }
            return this.flowRepository.save(newFlowRequest);
        }
        catch (e) {
            let errorMessage = e.message;
            if ((e === null || e === void 0 ? void 0 : e.code) === 11000)
                errorMessage = "Duplicated Index";
            throw new common_1.BadRequestException(errorMessage);
        }
    }
};
CreateFlowService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [flow_repository_1.FlowRepository])
], CreateFlowService);
exports.CreateFlowService = CreateFlowService;
//# sourceMappingURL=create-flow.service.js.map