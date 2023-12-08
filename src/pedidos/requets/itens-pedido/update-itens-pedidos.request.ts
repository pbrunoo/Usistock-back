import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class UpdateItensPedidosRequest {
    @ApiProperty({ type: String })
    @IsNotEmpty()
    produto: string;

    @ApiProperty({ type: String })
    @IsNotEmpty()
    fornecedorId: string;

    @ApiProperty({ type: Number })
    @IsNotEmpty()
    quantidade: number;

    @ApiProperty({ type: String })
    @IsNotEmpty()
    vlUnitario: string;
}