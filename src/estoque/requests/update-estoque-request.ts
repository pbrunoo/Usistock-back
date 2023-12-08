import { IsNotEmpty } from "class-validator";
import { Type } from "class-transformer";
import { Estoque } from "../entities/abstractions/estoque";

export class UpdateEstoqueRequest {
    @IsNotEmpty()
    @Type(() => String)
    produto: Estoque['produto'];

    @IsNotEmpty()
    @Type(() => String)
    unidadeId: Estoque['unidadeId'];

    @IsNotEmpty()
    @Type(() => Number)
    status: Estoque['status'];

    @IsNotEmpty()
    @Type(() => String)
    userUpdated: string;

    @IsNotEmpty()
    @Type(() => Date)
    updateAt: Date;
}