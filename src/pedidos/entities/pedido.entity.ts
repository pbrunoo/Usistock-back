import { ApiProperty } from "@nestjs/swagger";
import { ObjectID } from "mongodb";
import { Column, Entity, ObjectIdColumn } from "typeorm";
import { Pedido } from "./abstractions/pedido";
import { ItensPedido } from "./agreggates/itens-pedido";
import { NotaFiscal } from "./agreggates/nota-fiscal";

@Entity()
export class PedidoEntity implements Pedido {
    @ObjectIdColumn()
    @ApiProperty({ type: String })
    id: Pedido['id'];

    @Column()
    @ApiProperty({ type: Date })
    data: Pedido['data'];

    @Column()
    @ApiProperty({ type: String })
    unidadeId: Pedido['unidadeId'];

    @Column()
    @ApiProperty({ type: String })
    pedido: Pedido['pedido'];

    @Column()
    @ApiProperty({ type: String })
    descricao: Pedido['descricao'];

    @Column()
    @ApiProperty({ type: String })
    statusPedido: Pedido['statusPedido'];

    @Column()
    @ApiProperty({ type: Number })
    status: Pedido['status'];

    @Column()
    @ApiProperty({ type: String })
    userCreated: Pedido['userCreated'];

    @Column()
    @ApiProperty({ type: Date })
    createAt: Pedido['createAt'];

    @ApiProperty({ type: Date })
    deletedAt: Date;

    @ApiProperty({ type: String })
    deletedUserId: string;

    @ApiProperty({ type: [ItensPedido] })
    @Column()
    itensPedido: ItensPedido[];

    @ApiProperty({ type: [NotaFiscal] })
    @Column()
    notaFiscal: NotaFiscal[];

    AddItensPedido(itensPedido: ItensPedido) {
        if(!this.itensPedido) {
            this.itensPedido = [itensPedido];
            return;
        }
        this.itensPedido.push(itensPedido);
    }

    findItensPedido(pedidoId: string) {
        const itensPedidos = this.getItensPedido();
        return itensPedidos.find(itensPedido => itensPedido.id.equals(pedidoId));
    }

    updateItensPedido(pedidoId: string, itensPedidos: ItensPedido) {
        const updateItensPedidoIndex = this
            .itensPedido
            .findIndex(itensPedidos => itensPedidos.id.equals(pedidoId));
        if(updateItensPedidoIndex !== -1) {
            this.itensPedido[updateItensPedidoIndex] = itensPedidos;
        }
    }

    getItensPedido() {
        if(!this.itensPedido) {
            return[];
        }

        const notDeleteItensPedido = this
            .itensPedido
            .filter(itensPedidos => itensPedidos.quantidade);
        return notDeleteItensPedido.map(itensPedidos => new ItensPedido( itensPedidos));
    }

    deleteItensPedido(pedidoId: string | ObjectID) {
        const deleteItensPedidoIndex = this
            .itensPedido
            .findIndex(itensPedidos => itensPedidos.id.equals(pedidoId));
        if(deleteItensPedidoIndex !== -1) {
            this.itensPedido.splice(deleteItensPedidoIndex, 1);
        }
    }

    AddNotaFiscal(notaFiscal: NotaFiscal) {
        if(!this.notaFiscal) {
            this.notaFiscal = [notaFiscal];
            return;
        }
        this.notaFiscal.push(notaFiscal);
    }

    /*findNotaFiscal(idNF: string | ObjectID) {
        const notaFiscal = this.getNotaFiscal();
        return notaFiscal.find(notafiscals => notafiscals.idNF.equals(idNF));
    }

    updateNotaFiscal(notaFiscalId: string, notasFiscal: NotaFiscal) {
        const updateNotaFiscalIndex = this
            .notaFiscal
            .findIndex(notasFiscal => notasFiscal.idNF.equals(notaFiscalId));
        if(updateNotaFiscalIndex !== -1) {
            this.notaFiscal[updateNotaFiscalIndex] = notasFiscal;
        }    

    }

    getNotaFiscal() {
        if(!this.notaFiscal) {
            return[];
        }

        const notDeleteNotaFiscal = this
            .notaFiscal
            .filter(notasFiscal => notasFiscal.numeroNf);
        return notDeleteNotaFiscal.map(notasFiscal => new NotaFiscal( notasFiscal));
    }

    deleteNotaFiscal(notaFiscalId: string | ObjectID) {
        const deleteNotaFiscalIndex = this
            .notaFiscal
            .findIndex(notasFiscal => notasFiscal.idNF.equals(notaFiscalId));
        if(deleteNotaFiscalIndex !== -1) {
            this.notaFiscal.splice(deleteNotaFiscalIndex, 1);
        }
    }*/

}