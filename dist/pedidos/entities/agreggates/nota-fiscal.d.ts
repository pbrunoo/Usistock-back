import { ObjectID } from "typeorm";
export declare class NotaFiscal {
    idNF: ObjectID;
    data: Date;
    numeroNf: number;
    valor: string;
    way: string;
    constructor(notaFiscal?: Partial<NotaFiscal>);
}
