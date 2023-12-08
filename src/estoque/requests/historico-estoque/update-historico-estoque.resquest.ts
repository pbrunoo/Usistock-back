import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class UpdateHistoricoEstoqueRequest {
    @ApiProperty({type: Date})
    @IsNotEmpty()
    data: Date;

    @ApiProperty({type: Number})
    @IsNotEmpty()
    quantidade: number;  
    
    @ApiProperty({type: String})
    @IsNotEmpty()
    vlUnitario: string;
}