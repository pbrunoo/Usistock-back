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
exports.AnalisysObjectAtribuition = void 0;
const swagger_1 = require("@nestjs/swagger");
const analisys_object_status_enum_1 = require("../enum/analisys-object-status.enum");
class AnalisysObjectAtribuition {
    constructor(analisysObjectResumed) {
        this.id = analisysObjectResumed.id;
        this.slaDate = analisysObjectResumed.slaDate;
        this.status = analisysObjectResumed.status;
        this.userId = analisysObjectResumed.userId;
        this.documentNumber = analisysObjectResumed.documentNumber;
        this.batch = analisysObjectResumed.batch;
        this.id = analisysObjectResumed.id;
    }
}
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", String)
], AnalisysObjectAtribuition.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty({ type: Date }),
    __metadata("design:type", Date)
], AnalisysObjectAtribuition.prototype, "slaDate", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String, enum: analisys_object_status_enum_1.AnalisysObjectStatusEnum }),
    __metadata("design:type", String)
], AnalisysObjectAtribuition.prototype, "status", void 0);
__decorate([
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", String)
], AnalisysObjectAtribuition.prototype, "userId", void 0);
__decorate([
    swagger_1.ApiProperty({ type: Number }),
    __metadata("design:type", Number)
], AnalisysObjectAtribuition.prototype, "documentNumber", void 0);
__decorate([
    swagger_1.ApiProperty({ type: Number }),
    __metadata("design:type", Number)
], AnalisysObjectAtribuition.prototype, "batch", void 0);
exports.AnalisysObjectAtribuition = AnalisysObjectAtribuition;
//# sourceMappingURL=analisys-object-atribuition.js.map