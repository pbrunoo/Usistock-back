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
exports.FlowEntity = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
let FlowEntity = class FlowEntity {
};
__decorate([
    typeorm_1.ObjectIdColumn(),
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], FlowEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: Date }),
    __metadata("design:type", Object)
], FlowEntity.prototype, "dateRegistered", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], FlowEntity.prototype, "costumerId", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], FlowEntity.prototype, "costumerName", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], FlowEntity.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], FlowEntity.prototype, "description", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: Number }),
    __metadata("design:type", Object)
], FlowEntity.prototype, "sla", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: Number }),
    __metadata("design:type", Object)
], FlowEntity.prototype, "priority", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: Boolean }),
    __metadata("design:type", Object)
], FlowEntity.prototype, "duplicate", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: Number }),
    __metadata("design:type", Object)
], FlowEntity.prototype, "age", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: Boolean }),
    __metadata("design:type", Object)
], FlowEntity.prototype, "default", void 0);
FlowEntity = __decorate([
    typeorm_1.Entity()
], FlowEntity);
exports.FlowEntity = FlowEntity;
//# sourceMappingURL=flow.entity.js.map