import { IsNotEmpty } from "class-validator";
import { Type } from "class-transformer";
import { Consumo } from "../entities/abstractions/consumo";

export class NewConsumoRequest {
    @IsNotEmpty()
    @Type(()=> String)
    produto: Consumo['produto'];

    @IsNotEmpty()
    @Type(()=> String)   
    unidadeId: Consumo['unidadeId']; 

    @IsNotEmpty()
    @Type(()=> String)   
    fornecedor: Consumo['fornecedor']; 

    @IsNotEmpty()
    @Type(()=> Number)   
    status: Consumo['status']; 
}