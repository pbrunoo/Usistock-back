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
exports.AnalisysObjectResumed = void 0;
const swagger_1 = require("@nestjs/swagger");
const analisys_object_details_1 = require("../entities/aggregates/analisys-object-details");
const analisys_object_status_file_enum_1 = require("../enum/analisys-object-status-file.enum");
const analisys_object_status_enum_1 = require("../enum/analisys-object-status.enum");
class AnalisysObjectResumed {
    constructor(analisysObjectResumed) {
        this.id = analisysObjectResumed.id;
        this.firstTime = analisysObjectResumed.firstTime;
        this.flow = analisysObjectResumed.flow;
        this.status = analisysObjectResumed.status;
        this.statusFile = analisysObjectResumed.statusFile;
        this.totalSend = analisysObjectResumed.totalSend;
        this.totalImport = analisysObjectResumed.totalImport;
        this.totalRejected = analisysObjectResumed.totalRejected;
        this.totalDuplicatedFlow = analisysObjectResumed.totalDuplicatedFlow;
        this.totalDuplicatedFile = analisysObjectResumed.totalDuplicatedFile;
        this.totalIssue = analisysObjectResumed.totalIssue;
        this.analisysObjectDetails = analisysObjectResumed.analisysObjectDetails;
    }
}
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", String)
], AnalisysObjectResumed.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty({ type: Date }),
    __metadata("design:type", Date)
], AnalisysObjectResumed.prototype, "firstTime", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", String)
], AnalisysObjectResumed.prototype, "flow", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String, enum: analisys_object_status_enum_1.AnalisysObjectStatusEnum }),
    __metadata("design:type", String)
], AnalisysObjectResumed.prototype, "status", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String, enum: analisys_object_status_file_enum_1.AnalisysObjectStatusFileEnum }),
    __metadata("design:type", String)
], AnalisysObjectResumed.prototype, "statusFile", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Number)
], AnalisysObjectResumed.prototype, "totalSend", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Number)
], AnalisysObjectResumed.prototype, "totalImport", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Number)
], AnalisysObjectResumed.prototype, "totalRejected", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Number)
], AnalisysObjectResumed.prototype, "totalDuplicatedFlow", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Number)
], AnalisysObjectResumed.prototype, "totalDuplicatedFile", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Number)
], AnalisysObjectResumed.prototype, "totalIssue", void 0);
__decorate([
    swagger_1.ApiProperty({ type: [analisys_object_details_1.AnalisysObjectDetails] }),
    __metadata("design:type", Array)
], AnalisysObjectResumed.prototype, "analisysObjectDetails", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", String)
], AnalisysObjectResumed.prototype, "userId", void 0);
exports.AnalisysObjectResumed = AnalisysObjectResumed;
//# sourceMappingURL=analisys-object-resumed.js.map