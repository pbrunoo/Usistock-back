import { AnalisysObjectDetails } from '../entities/aggregates/analisys-object-details';
import { AnalisysObjectStatusFileEnum } from '../enum/analisys-object-status-file.enum';
import { AnalisysObjectStatusEnum } from '../enum/analisys-object-status.enum';
export declare class AnalisysObjectResumed {
    readonly id: string;
    readonly firstTime: Date;
    readonly flow: string;
    readonly status: AnalisysObjectStatusEnum;
    readonly statusFile: AnalisysObjectStatusFileEnum;
    readonly totalSend: Number;
    readonly totalImport: Number;
    readonly totalRejected: Number;
    readonly totalDuplicatedFlow: Number;
    readonly totalDuplicatedFile: Number;
    readonly totalIssue: Number;
    readonly analisysObjectDetails: AnalisysObjectDetails[];
    readonly userId: string;
    constructor(analisysObjectResumed: Readonly<AnalisysObjectResumed>);
}
