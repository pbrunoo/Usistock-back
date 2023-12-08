import { ApiProperty } from "@nestjs/swagger";
import { ObjectID } from "typeorm";

export class NotaFiscal {
    @ApiProperty({ type: String })
    idNF: ObjectID;

    @ApiProperty({type: Date})
    data: Date;

    @ApiProperty({type: Number})
    numeroNf: number;

    @ApiProperty({type: String})
    valor: string;

    @ApiProperty({type: String})
    way: string;

    constructor(notaFiscal?: Partial<NotaFiscal>) {
        if(!notaFiscal) {
            this.idNF = new ObjectID();
            return;
        }
        this.idNF = notaFiscal.idNF || new ObjectID();
        this.data = notaFiscal.data;
        this.numeroNf = notaFiscal.numeroNf;
        this.valor = notaFiscal.valor;
        this.way = notaFiscal.way;
    }
}