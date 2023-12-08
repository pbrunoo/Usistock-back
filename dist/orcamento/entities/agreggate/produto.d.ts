import { ObjectID } from "mongodb";
export declare class Produto {
    id?: ObjectID;
    produto: string;
    volume: number;
    vlUnitario: string;
    constructor(produtos?: Partial<Produto>);
}
