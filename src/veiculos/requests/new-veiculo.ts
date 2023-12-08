import { Type } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { Veiculo } from "../entities/abstractions/veiculo";

export class NewVeiculoRequest {
    @IsNotEmpty()
    @Type(() => String)
    veiculo: Veiculo['veiculo'];
    
    @IsNotEmpty()
    @Type(() => String)
    placa: Veiculo['placa'];

    @IsNotEmpty()
    @Type(() => String)
    responsavel: Veiculo['responsavel'];

    @IsNotEmpty()
    @Type(() => String)
    unidadeId: Veiculo['unidadeId'];

    @IsNotEmpty()
    @Type(() => String)
    status: Veiculo['status'];
    

}