import { ApiProperty } from "@nestjs/swagger";


export class UnityEmpresa {
    @ApiProperty({type: String})
    readonly id: string;

    @ApiProperty({type: String})
    readonly nomeUnidade: string;

    @ApiProperty({type: String})
    readonly idEmpresa: string;

    @ApiProperty({type: String})
    readonly razaoSocial: string;

    @ApiProperty({type: Number})
    readonly status: number;

constructor(UnityEmpresa: Readonly<UnityEmpresa>) {
    this.id = UnityEmpresa.id;
    this.nomeUnidade = UnityEmpresa.nomeUnidade;
    this.idEmpresa = UnityEmpresa.idEmpresa;
    this.razaoSocial = UnityEmpresa.razaoSocial;
    this.status = UnityEmpresa.status;
}

}