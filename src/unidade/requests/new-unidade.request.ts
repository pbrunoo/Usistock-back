import { IsNotEmpty } from "class-validator";
import { Type } from "class-transformer";
import { Unidade } from "../entities/abstractions/unidade"

export class NewUnidadeRequest {
    @IsNotEmpty()
    @Type(() => String)
    nomeUnidade: Unidade['nomeUnidade'];

    @IsNotEmpty()
    @Type(() => String)
    idEmpresa: Unidade['idEmpresa'];

    @IsNotEmpty()
    @Type(() => Number)
    status: Unidade['status'];

}