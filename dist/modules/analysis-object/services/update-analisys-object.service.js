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
exports.UpdateAnalisysObjectService = void 0;
const common_1 = require("@nestjs/common");
const analysis_object_repository_1 = require("../repositories/analysis-object.repository");
const analisys_object_status_enum_1 = require("../enum/analisys-object-status.enum");
var fs = require('fs');
var xlsx = require('xlsx');
let UpdateAnalisysObjectService = class UpdateAnalisysObjectService {
    constructor(analisysObjectlRepository) {
        this.analisysObjectlRepository = analisysObjectlRepository;
    }
    async updateStatus(id) {
        try {
            const analisysObject = await this.analisysObjectlRepository.findOne(id);
            analisysObject.status = analisys_object_status_enum_1.AnalisysObjectStatusEnum.concluido;
            const analisysObjectUpdate = await this.analisysObjectlRepository.save(analisysObject);
            return analisysObjectUpdate;
        }
        catch (e) {
            let errorMessage = e.message;
            if ((e === null || e === void 0 ? void 0 : e.code) === 11000)
                errorMessage = "Duplicated Index";
            throw new common_1.BadRequestException(errorMessage);
        }
    }
    async updateUser(id, userId) {
        try {
            const analisysObject = await this.analisysObjectlRepository.findOne(id);
            analisysObject.userId = userId;
            const analisysObjectUpdate = await this.analisysObjectlRepository.save(analisysObject);
            return analisysObjectUpdate;
        }
        catch (e) {
            let errorMessage = e.message;
            if ((e === null || e === void 0 ? void 0 : e.code) === 11000)
                errorMessage = "Duplicated Index";
            throw new common_1.BadRequestException(errorMessage);
        }
    }
    async updateFlow(id, flowId) {
        try {
            const analisysObject = await this.analisysObjectlRepository.findOne(id);
            analisysObject.flowId = flowId;
            const analisysObjectUpdate = await this.analisysObjectlRepository.save(analisysObject);
            return analisysObjectUpdate;
        }
        catch (e) {
            let errorMessage = e.message;
            if ((e === null || e === void 0 ? void 0 : e.code) === 11000)
                errorMessage = "Duplicated Index";
            throw new common_1.BadRequestException(errorMessage);
        }
    }
};
UpdateAnalisysObjectService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [analysis_object_repository_1.AnalisysObjectRepository])
], UpdateAnalisysObjectService);
exports.UpdateAnalisysObjectService = UpdateAnalisysObjectService;
//# sourceMappingURL=update-analisys-object.service.js.map