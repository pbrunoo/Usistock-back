"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalisysObjectRepository = void 0;
const typeorm_1 = require("typeorm");
const analysis_object_entity_1 = require("../entities/analysis-object.entity");
const moment = require("moment");
let AnalisysObjectRepository = class AnalisysObjectRepository extends typeorm_1.Repository {
    async getAll() {
        const analisysObjects = await this.find({});
        return analisysObjects;
    }
    getAnalisysObcjectByFilter(filters) {
        const andQueryStatement = this.createFilteredAnalisysObject(filters);
        return this.find({
            where: Object.assign({}, andQueryStatement.length > 0 && {
                $and: andQueryStatement
            })
        });
    }
    async getAnalisysObcjectByStatus(flow, sla) {
        return this.find({
            where: {
                flowId: flow,
                "firstTime": {
                    $lt: moment().subtract(sla, 'days').toDate()
                },
                status: { $ne: 'Concluido' }
            }
        });
    }
    async getAnalisysObcjectByFlow(flow, sla) {
        return this.find({
            where: {
                flowId: flow,
                "firstTime": {
                    $lt: moment().subtract(sla, 'days').toDate()
                },
                status: { $ne: 'Concluido' }
            }
        });
    }
    createFilteredAnalisysObject(filters) {
        const andQueryStatement = [];
        if (filters.document) {
            andQueryStatement.push({
                document: filters.document
            });
        }
        if (filters.status) {
            andQueryStatement.push({
                statusFile: filters.status
            });
        }
        if (filters.documentNumber) {
            andQueryStatement.push({
                documentNumber: filters.documentNumber
            });
        }
        if (filters.level) {
            andQueryStatement.push({
                status: filters.level
            });
        }
        return andQueryStatement;
    }
};
AnalisysObjectRepository = __decorate([
    typeorm_1.EntityRepository(analysis_object_entity_1.AnalisysObjectEntity)
], AnalisysObjectRepository);
exports.AnalisysObjectRepository = AnalisysObjectRepository;
//# sourceMappingURL=analysis-object.repository.js.map