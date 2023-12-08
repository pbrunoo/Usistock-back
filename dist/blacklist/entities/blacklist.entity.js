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
exports.BlackListEntity = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
let BlackListEntity = class BlackListEntity {
};
__decorate([
    typeorm_1.ObjectIdColumn(),
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], BlackListEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], BlackListEntity.prototype, "costumerId", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], BlackListEntity.prototype, "costumerName", void 0);
__decorate([
    typeorm_1.Column(),
    swagger_1.ApiProperty({ type: String }),
    __metadata("design:type", Object)
], BlackListEntity.prototype, "name", void 0);
BlackListEntity = __decorate([
    typeorm_1.Entity()
], BlackListEntity);
exports.BlackListEntity = BlackListEntity;
//# sourceMappingURL=blacklist.entity.js.map