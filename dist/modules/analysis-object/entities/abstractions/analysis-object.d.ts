import { AnalisysObjectStatusFileEnum } from '../../enum/analisys-object-status-file.enum';
import { AnalisysObjectStatusEnum } from '../../enum/analisys-object-status.enum';
export interface AnalysisObject {
    id?: string;
    firstTime: Date;
    name: string;
    document: string;
    documentType: string;
    documentNumber: number;
    flowId: string;
    batch: number;
    status: AnalisysObjectStatusEnum;
    statusFile: AnalisysObjectStatusFileEnum;
}
