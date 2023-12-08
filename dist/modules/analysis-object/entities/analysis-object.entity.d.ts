import { AnalysisObject } from './abstractions/analysis-object';
import { AnalisysObjectStatusEnum } from '../enum/analisys-object-status.enum';
import { AnalisysObjectDetails } from './aggregates/analisys-object-details';
import { AnalisysObjectStatusFileEnum } from '../enum/analisys-object-status-file.enum';
export declare class AnalisysObjectEntity implements AnalysisObject {
    id: AnalysisObject['id'];
    firstTime: AnalysisObject['firstTime'];
    name: AnalysisObject['name'];
    document: AnalysisObject['document'];
    documentType: AnalysisObject['documentType'];
    documentNumber: AnalysisObject['documentNumber'];
    flowId: AnalysisObject['flowId'];
    status: AnalisysObjectStatusEnum;
    statusFile: AnalisysObjectStatusFileEnum;
    batch: AnalysisObject['batch'];
    analisysObjectDetails: AnalisysObjectDetails[];
    userId: AnalysisObject['id'];
}
