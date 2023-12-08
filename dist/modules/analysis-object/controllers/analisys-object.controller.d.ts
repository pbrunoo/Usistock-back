import { AnalisysObjectEntity } from '../entities/analysis-object.entity';
import { AnalisysObjectRepository } from "../repositories/analysis-object.repository";
import { CreateAnalisysObjectService } from '../services/create-analisys-object.service';
import { AnalisysObjectFinderService } from '../services/analisys-object-finder.service';
import { UpdateAnalisysObjectService } from '../services/update-analisys-object.service';
import { AnalisysObjectFinderRequest } from '../requests/analisys-object-filter';
import { AnalisysObjectResumed } from '../dto/analisys-object-resumed';
import { AnalisysObjectDashboardService } from '../services/analisys-object-dashboard.service';
import { AnalisysObjectNotReportedIntimeFlow } from '../dto/analisys-object-not-reported-in-time-flow';
import { AnalisysObjectNotReportedIntimeStage } from '../dto/analisys-object-not-reported-in-time-stage';
export declare class AnalisysObjectController {
    private analisysObjectRepository;
    private createAnalisysObjectService;
    private analisysObjectFinderService;
    private updateAnalisysObjectService;
    private analisysObjectDashboardService;
    constructor(analisysObjectRepository: AnalisysObjectRepository, createAnalisysObjectService: CreateAnalisysObjectService, analisysObjectFinderService: AnalisysObjectFinderService, updateAnalisysObjectService: UpdateAnalisysObjectService, analisysObjectDashboardService: AnalisysObjectDashboardService);
    create(flowId: string, userId: string, file: any): Promise<{
        name: string;
        document: string;
        documentType: string;
        documentNumber: number;
        flowId: string;
        status: import("../enum/analisys-object-status.enum").AnalisysObjectStatusEnum.emprocessamento;
        statusFile: import("../enum/analisys-object-status-file.enum").AnalisysObjectStatusFileEnum.aprovado;
        batch: number;
        analisysObjectDetails: any;
        userId: string;
    } & AnalisysObjectEntity>;
    getAll(): Promise<AnalisysObjectEntity[]>;
    getAnalisysObjectResumedById(id: string): Promise<AnalisysObjectResumed>;
    getAnalisysObjectNotReportedIntimeFlow(): Promise<AnalisysObjectNotReportedIntimeFlow[]>;
    getAnalisysObjectNotReportedIntimeStage(): Promise<AnalisysObjectNotReportedIntimeStage[]>;
    getnalisysObjectByFilter(analisysObjectFinderRequest: AnalisysObjectFinderRequest): Promise<AnalisysObjectEntity[]>;
    update(id: string): Promise<void>;
    updateUser(id: string, userId: string): Promise<void>;
    updateFlow(id: string, flowId: string): Promise<void>;
}
