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
exports.AnalisysObjectDetailsReaderService = void 0;
const common_1 = require("@nestjs/common");
const analysis_object_repository_1 = require("../../repositories/analysis-object.repository");
let AnalisysObjectDetailsReaderService = class AnalisysObjectDetailsReaderService {
    constructor(analisysObjectRepository) {
        this.analisysObjectRepository = analisysObjectRepository;
    }
    async getAll(id) {
        const analisysObject = await this.analisysObjectRepository.findOne(id);
        return analisysObject.analisysObjectDetails;
    }
    async getById(id, analisysObjectDetailId) {
        const analisysObject = await this.analisysObjectRepository.findOne(id);
        const analisysObjectDetail = analisysObject.analisysObjectDetails
            .find(detail => detail.id.toHexString() == analisysObjectDetailId);
        return analisysObjectDetail;
    }
};
AnalisysObjectDetailsReaderService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [analysis_object_repository_1.AnalisysObjectRepository])
], AnalisysObjectDetailsReaderService);
exports.AnalisysObjectDetailsReaderService = AnalisysObjectDetailsReaderService;
//# sourceMappingURL=analisys-object-details-reader.service.js.map