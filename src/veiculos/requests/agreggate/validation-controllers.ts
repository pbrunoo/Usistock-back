import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";


export class NewValidationControllersRequest {
    @ApiProperty({type: String})
    @IsNotEmpty()
    userCreated: string;

    @ApiProperty({ type: String })
    @IsNotEmpty()
    userUpdated: string;

    @ApiProperty({ type: Date })
    @IsNotEmpty()
    createdAt: Date;

    @ApiProperty({ type: Date })
    @IsNotEmpty()
    updateAt: Date;
}