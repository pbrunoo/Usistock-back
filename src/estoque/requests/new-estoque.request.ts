import { IsNotEmpty } from "class-validator";
import { Type } from "class-transformer";
import { Estoque } from "../entities/abstractions/estoque";

export class NewEstoqueRequest {

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
    @Type(() => Date)
    createAt: Estoque['createAt'];

    @IsNotEmpty()
    @Type(() => String)
    userCreated: Estoque['userCreated'];

}