import { ApiProperty } from '@nestjs/swagger';
export class UnityFuncionarioEmpresa {
    @ApiProperty({type: String})
    readonly id: string;

    @ApiProperty({type: String})
    readonly nome: string;
    
    @ApiProperty({type: String})
    readonly funcao: string;

    @ApiProperty({type: Date})
    readonly contratacao: Date;

    @ApiProperty({type: String})
    readonly empresa: string;

    @ApiProperty({type: String})
    readonly razaoSocial: string;
    

    @ApiProperty({type: Number})
    readonly status: number;

constructor(UnityFuncionarioEmpresa: Readonly<UnityFuncionarioEmpresa>) {
    this.id = UnityFuncionarioEmpresa.id;
    this.nome = UnityFuncionarioEmpresa.nome;
    this.funcao = UnityFuncionarioEmpresa.funcao;
    this.contratacao = UnityFuncionarioEmpresa.contratacao;
    this.empresa = UnityFuncionarioEmpresa.empresa;
    this.razaoSocial = UnityFuncionarioEmpresa.razaoSocial;
    this.status = UnityFuncionarioEmpresa.status;
}

}