import { ApiProperty } from "@nestjs/swagger";

export class ValidationControllers {
    @ApiProperty({ type: Number })
    userCreated: number;

    @ApiProperty({ type: Number })
    userUpdated: number;

    @ApiProperty({ type: Date })
    createAt: Date;

    @ApiProperty({ type: Date })
    updateAt: Date;

    constructor(validationControllers: ValidationControllers) {
        this.userCreated = validationControllers.userCreated;
        this.userUpdated = validationControllers.userUpdated;
        this.createAt = validationControllers.createAt;
        this.updateAt = validationControllers.updateAt;
    }
}