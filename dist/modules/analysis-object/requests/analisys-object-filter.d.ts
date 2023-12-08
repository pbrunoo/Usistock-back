import { AnalysisObject } from "../entities/abstractions/analysis-object";
export declare class AnalisysObjectFinderRequest {
    document: AnalysisObject['document'];
    status: AnalysisObject['status'];
    documentNumber: AnalysisObject['documentNumber'];
    firstTime: AnalysisObject['firstTime'];
    userId: string;
    level: string;
}
