import { ApiProperty } from "@nestjs/swagger";

export class ValidationControllers {
    @ApiProperty({ type: String })
    userCreated: string;

    @ApiProperty({ type: String })
    userUpdated: string;

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