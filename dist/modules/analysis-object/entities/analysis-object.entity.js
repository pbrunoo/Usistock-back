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
exports.AnalisysObjectEntity = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const analisys_object_status_enum_1 = require("../enum/analisys-object-status.enum");
const analisys_object_details_1 = require("./aggregates/analisys-object-details");
const analisys_object_status_file_enum_1 = require("../enum/analisys-object-status-file.enum");
let AnalisysObjectEntity = class AnalisysObjectEntity {
};
__decorate([
    typeorm_1.ObjectIdColumn(),
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], AnalisysObjectEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Object)
], AnalisysObjectEntity.prototype, "firstTime", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], AnalisysObjectEntity.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], AnalisysObjectEntity.prototype, "document", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], AnalisysObjectEntity.prototype, "documentType", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: Number }),
    __metadata("design:type", Object)
], AnalisysObjectEntity.prototype, "documentNumber", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], AnalisysObjectEntity.prototype, "flowId", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: String, enum: analisys_object_status_enum_1.AnalisysObjectStatusEnum }),
    __metadata("design:type", String)
], AnalisysObjectEntity.prototype, "status", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: String, enum: analisys_object_status_file_enum_1.AnalisysObjectStatusFileEnum }),
    __metadata("design:type", String)
], AnalisysObjectEntity.prototype, "statusFile", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: Number }),
    __metadata("design:type", Object)
], AnalisysObjectEntity.prototype, "batch", void 0);
__decorate([
    swagger_1.ApiProperty({ type: [analisys_object_details_1.AnalisysObjectDetails] }),
    typeorm_1.Column(),
    __metadata("design:type", Array)
], AnalisysObjectEntity.prototype, "analisysObjectDetails", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], AnalisysObjectEntity.prototype, "userId", void 0);
AnalisysObjectEntity = __decorate([
    typeorm_1.Entity()
], AnalisysObjectEntity);
exports.AnalisysObjectEntity = AnalisysObjectEntity;
//# sourceMappingURL=analysis-object.entity.js.map