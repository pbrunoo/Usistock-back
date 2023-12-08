import { ApiProperty } from "@nestjs/swagger";

export class Trabalhista {
    @ApiProperty({type: Number})
    pis: number;   
    
    @ApiProperty({type: Date})
    dataAdmissao: Date;

    @ApiProperty({type: Number})
    salarioAdmissao: number;

    @ApiProperty({type: Number})
    salarioAtual: number;

    @ApiProperty({type: String})
    funcao: string;

    @ApiProperty({type: String})
    empresa: string;

    @ApiProperty({type: String})
    empresaAnterior: string;

    constructor(trabalhista: Trabalhista) {
        this.pis = trabalhista.pis;
        this.dataAdmissao = trabalhista.dataAdmissao;
        this.salarioAdmissao = trabalhista.salarioAdmissao;
        this.salarioAtual = trabalhista.salarioAtual;
        this.funcao = trabalhista.funcao;
        this.empresa = trabalhista.empresa;
        this.empresaAnterior = trabalhista.empresaAnterior;
    }
}