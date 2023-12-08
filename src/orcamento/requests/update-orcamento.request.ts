import { Type } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { Orcamento } from "../entities/abstractions/orcamento";

export class UpdateOrcamentoRequest {
    @IsNotEmpty()
    @Type(() => Date)
    data: Orcamento['data'];

    @IsNotEmpty()
    @Type(() => String)
    unidadeId: Orcamento['unidadeId'];

    @IsNotEmpty()
    @Type(() => String)
    clienteId: Orcamento['clienteId'];

    @IsNotEmpty()
    @Type(() => String)
    statusPedido: Orcamento['statusPedido'];

    @IsNotEmpty()
    @Type(() => String)
    condicaoPagamento: Orcamento['condicaoPagamento'];

    @IsNotEmpty()
    @Type(() => Number)
    prazoPagamento: Orcamento['prazoPagamento'];

    @IsNotEmpty()
    @Type(() => Number)
    status: Orcamento['status'];

    @IsNotEmpty()
    @Type(() => String)
    userUpdated: string;

    @IsNotEmpty()
    @Type(() => Date)
    updateAt: Date;
}

