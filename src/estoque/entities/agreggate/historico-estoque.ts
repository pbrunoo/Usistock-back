import { ApiProperty } from "@nestjs/swagger";
import { Column } from "typeorm";
import { ObjectID } from 'mongodb';


export class HistoricoEstoque {
    @ApiProperty({ type: String })
    id: ObjectID;

    @ApiProperty({ type: Date })
    data: Date;

    @ApiProperty({ type: Number })
    quantidade: number;

    @ApiProperty({ type: String })
    vlUnitario: string;

    constructor(historicoEstoque?: Partial<HistoricoEstoque>) {
        if (!historicoEstoque) {
            this.id = new ObjectID();
            return;
        } 
        
        this.id = historicoEstoque.id || new ObjectID();
        this.data = historicoEstoque.data;
        this.quantidade = historicoEstoque.quantidade;
        this.vlUnitario = historicoEstoque.vlUnitario;
    }
}