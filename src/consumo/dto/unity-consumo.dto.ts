import { ApiProperty } from "@nestjs/swagger";

export class UnityConsumo {
    @ApiProperty({ type: String })
    readonly id: string;
    
    @ApiProperty({ type: String })
    readonly produto: string;

    @ApiProperty({ type: String })
    readonly fornecedor: string;

    @ApiProperty({ type: String })
    readonly nomeEmpresa: string;

    @ApiProperty({ type: String })
    readonly telefone: string;

    @ApiProperty({ type: String })
    readonly status: string;

    constructor(UnityConsumo: Readonly<UnityConsumo>) {
        this.id = UnityConsumo.id;
        this.produto = UnityConsumo.produto;
        this.fornecedor = UnityConsumo.fornecedor;
        this.nomeEmpresa = UnityConsumo.nomeEmpresa;
        this.telefone = UnityConsumo.telefone;
        this.status = UnityConsumo.status;
    }
}