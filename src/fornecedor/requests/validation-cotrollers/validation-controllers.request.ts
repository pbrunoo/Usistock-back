import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class NewValidationControllersRequest {
    @ApiProperty({ type:Number })
    @IsNotEmpty()
    userCreated: number;

    @ApiProperty({ type:Number })
    @IsNotEmpty()
    userUpdated: number;

    @ApiProperty({ type:Date })
    @IsNotEmpty()
    createAt: Date;

    @ApiProperty({ type:Date })
    @IsNotEmpty()
    updateAt: Date;
}