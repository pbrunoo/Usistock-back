import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class TrabalhistaRequest {

    @ApiProperty({ type: Number })
    @IsNotEmpty()
    pis: number;

    @ApiProperty({ type: Date })
    @IsNotEmpty()
    dataAdmissao: Date;

    @ApiProperty({ type: Number })
    @IsNotEmpty()
    salarioAdmissao: number;

    @ApiProperty({ type: Number })
    @IsNotEmpty()
    salarioAtual: number;

    @ApiProperty({ type: String })
    @IsNotEmpty()
    funcao: string;

    @ApiProperty({ type: String })
    @IsNotEmpty()
    empresa: string;

    @ApiProperty({ type: String })
    @IsNotEmpty()
    empresaAnterior: string;

}