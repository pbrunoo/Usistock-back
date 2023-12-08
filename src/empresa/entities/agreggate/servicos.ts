import { ApiProperty } from "@nestjs/swagger";

export class Servicos{
    @ApiProperty({ type: Number })
    cnae: number;

    @ApiProperty({ type: Number })
    itemLc: number;

    @ApiProperty({ type: Number })
    ativMuni: number;


    constructor(servicos: Servicos) {
        this.cnae = servicos.cnae;
        this.itemLc = servicos.itemLc;
        this.ativMuni = servicos.ativMuni;
        
    }
}