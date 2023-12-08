import { ObjectID } from 'mongodb';
export declare class HistoricoEstoque {
    id: ObjectID;
    data: Date;
    quantidade: number;
    vlUnitario: string;
    constructor(historicoEstoque?: Partial<HistoricoEstoque>);
}
