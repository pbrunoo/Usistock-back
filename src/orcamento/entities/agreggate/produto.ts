import { ApiProperty } from "@nestjs/swagger";
import { ObjectID } from "mongodb";

export class Produto {
    @ApiProperty({ type: String })
    id?: ObjectID;

    @ApiProperty({ type: String })
    produto: string;

    @ApiProperty({ type: Number })
    volume: number;

    @ApiProperty({ type: String })
    vlUnitario: string;

    constructor(produtos?: Partial<Produto> ) {
        if(!produtos) {
            this.id = new ObjectID();
            return;
        }

        this.id = produtos.id || new ObjectID();
        this.produto = produtos.produto;
        this.volume = produtos.volume;
        this.vlUnitario = produtos.vlUnitario;
    }
}