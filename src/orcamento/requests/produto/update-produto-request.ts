import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class UpdateProdutoRequest {
    @ApiProperty({ type: String })
    id: string;
    
    @ApiProperty({ type: String })
    @IsNotEmpty()
    produto: string;

    @ApiProperty({ type: Number })
    @IsNotEmpty()
    volume: number;

    @ApiProperty({ type: String })
    @IsNotEmpty()
    vlUnitario: string;

}




