import { AnalisysObjectStatusEnum } from '../enum/analisys-object-status.enum';
export declare class AnalisysObjectAtribuition {
    readonly id: string;
    readonly slaDate: Date;
    readonly status: AnalisysObjectStatusEnum;
    readonly userId: string;
    readonly documentNumber: number;
    readonly batch: number;
    constructor(analisysObjectResumed: Readonly<AnalisysObjectAtribuition>);
}
