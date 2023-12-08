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
exports.AnalisysObjectDetails = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const analisys_object_status_enum_1 = require("../../enum/analisys-object-status.enum");
const mongodb_1 = require("mongodb");
class AnalisysObjectDetails {
    constructor(analisysObjectDetails) {
        this.id = analisysObjectDetails.id;
        this.toolsDriver = analisysObjectDetails.toolsDriver;
        this.cityName = analisysObjectDetails.cityName;
        this.cpf = analisysObjectDetails.cpf;
        this.bithDate = analisysObjectDetails.bithDate;
        this.fullName = analisysObjectDetails.fullName;
        this.rgNumber = analisysObjectDetails.rgNumber;
        this.fatherName = analisysObjectDetails.fatherName;
        this.motherName = analisysObjectDetails.motherName;
        this.phoneNumber = analisysObjectDetails.phoneNumber;
        this.status = analisysObjectDetails.status;
    }
}
__decorate([
    swagger_1.ApiProperty({ type: String }),
    typeorm_1.Column(),
    __metadata("design:type", mongodb_1.ObjectID)
], AnalisysObjectDetails.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", String)
], AnalisysObjectDetails.prototype, "toolsDriver", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", String)
], AnalisysObjectDetails.prototype, "cityName", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", String)
], AnalisysObjectDetails.prototype, "cpf", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", String)
], AnalisysObjectDetails.prototype, "bithDate", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", String)
], AnalisysObjectDetails.prototype, "fullName", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", String)
], AnalisysObjectDetails.prototype, "rgNumber", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", String)
], AnalisysObjectDetails.prototype, "fatherName", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", String)
], AnalisysObjectDetails.prototype, "motherName", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", String)
], AnalisysObjectDetails.prototype, "phoneNumber", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String, enum: analisys_object_status_enum_1.AnalisysObjectStatusEnum }),
    __metadata("design:type", String)
], AnalisysObjectDetails.prototype, "status", void 0);
exports.AnalisysObjectDetails = AnalisysObjectDetails;
//# sourceMappingURL=analisys-object-details.js.map