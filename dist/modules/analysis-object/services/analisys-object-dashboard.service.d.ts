import { FlowRepository } from "src/flow/repositories/flow.repository";
import { AnalisysObjectNotReportedIntimeFlow } from "../dto/analisys-object-not-reported-in-time-flow";
import { AnalisysObjectNotReportedIntimeStage } from "../dto/analisys-object-not-reported-in-time-stage";
import { AnalisysObjectRepository } from "../repositories/analysis-object.repository";
export declare class AnalisysObjectDashboardService {
    private analisysObjectlRepository;
    private flowRepository;
    constructor(analisysObjectlRepository: AnalisysObjectRepository, flowRepository: FlowRepository);
    getAnalisysObjectNotReportedIntimeFlow(): Promise<AnalisysObjectNotReportedIntimeFlow[]>;
    getAnalisysObjectNotReportedIntimeStage(): Promise<AnalisysObjectNotReportedIntimeStage[]>;
}
