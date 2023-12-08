import { ApiProperty } from "@nestjs/swagger";
import { ObjectID } from "mongodb";

export class ItensPedido {
    @ApiProperty({ type: String })
    id: ObjectID;

    @ApiProperty({ type: String })
    produto: string;

    @ApiProperty({ type: String })
    fornecedorId: string;

    @ApiProperty({ type: Number })
    quantidade: number;

    @ApiProperty({ type: String })
    vlUnitario: string;

    constructor(itensPedido?: Partial<ItensPedido>) {
        if(!itensPedido) {
            this.id = new ObjectID();
            return;
        }

        this.id= itensPedido.id || new ObjectID();
        this.produto= itensPedido.produto;
        this.fornecedorId= itensPedido.fornecedorId;
        this.quantidade= itensPedido.quantidade;
        this.vlUnitario= itensPedido.vlUnitario;
    }

}