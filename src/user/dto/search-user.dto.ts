import { ObjectID } from 'typeorm';
import { ApiProperty } from "@nestjs/swagger";

export class SearchUserDto {
    @ApiProperty({ type: String })
    readonly id: ObjectID;

    @ApiProperty({ type: String })
    readonly login: string;

    @ApiProperty({ type: String })
    readonly nome: string;

    @ApiProperty({ type: String })
    readonly email: string;

    @ApiProperty({ type: String })
    readonly telefone: string;

    @ApiProperty({ type: String })
    readonly cidade: string;

    @ApiProperty({ type: String })
    readonly unidadeId: string;


}