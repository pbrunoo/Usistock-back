import { IsNotEmpty } from "class-validator";
import { Type } from "class-transformer";
import { Estoque } from "../entities/abstractions/estoque";

export class UpdateValueRequest {
    @IsNotEmpty()
    @Type(() => Number)
    estoqueDisponivel: Estoque['estoqueDisponivel'];

}