import { ApiProperty } from "@nestjs/swagger";
import { CreateDateColumn, UpdateDateColumn } from "typeorm";

export class ValidationParameters {
    @ApiProperty({ type: String })
    userCreated: string;

    @ApiProperty({ type: String })
    userUpdated: string;

    @ApiProperty({ type: Date })
    createdAt: Date;

    @ApiProperty({ type: Date })
    updateAt: Date;

    constructor(validationParameters: ValidationParameters) {
        this.userCreated = validationParameters.userCreated;
        this.userUpdated = validationParameters.userUpdated;
        this.createdAt = validationParameters.createdAt;
        this.updateAt = validationParameters.updateAt;
    }
}