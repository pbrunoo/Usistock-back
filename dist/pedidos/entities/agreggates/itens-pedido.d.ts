import { ObjectID } from "mongodb";
export declare class ItensPedido {
    id: ObjectID;
    produto: string;
    fornecedorId: string;
    quantidade: number;
    vlUnitario: string;
    constructor(itensPedido?: Partial<ItensPedido>);
}
