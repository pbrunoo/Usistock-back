import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class NewServicosRequest {
    @ApiProperty({ type:Number })
    @IsNotEmpty()
    cnae: number;

    @ApiProperty({ type:Number })
    @IsNotEmpty()
    itemLc: number;

    @ApiProperty({ type:Number })
    @IsNotEmpty()
    ativMuni: number;
}