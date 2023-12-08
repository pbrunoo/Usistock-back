import { Type } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { Pedido } from "../entities/abstractions/pedido";

export class NewPedidoRequest {
    @IsNotEmpty()
    @Type(() => Date)
    data: Pedido['data'];

    @IsNotEmpty()
    @Type(() => String)
    unidadeId: Pedido['unidadeId'];

    @IsNotEmpty()
    @Type(() => String)
    pedido: Pedido['pedido'];

    @IsNotEmpty()
    @Type(() => String)
    descricao: Pedido['descricao'];

    @IsNotEmpty()
    @Type(() => String)
    statusPedido: Pedido['statusPedido'];

    @IsNotEmpty()
    @Type(() => Number)
    status: Pedido['status'];

    @IsNotEmpty()
    @Type(() => String)
    userCreated: Pedido['userCreated'];

    @IsNotEmpty()
    @Type(() => Date)
    createAt: Pedido['createAt'];


}