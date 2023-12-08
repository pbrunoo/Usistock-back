import { ApiProperty } from "@nestjs/swagger";
import { ObjectID } from "bson";
import { Column, Entity, ObjectIdColumn } from "typeorm";
import { Orcamento } from "./abstractions/orcamento";
import { Produto } from "./agreggate/produto";

@Entity()
export class OrcamentoEntity implements Orcamento {
    @ObjectIdColumn()
    @ApiProperty({type: String})
    id: Orcamento['id'];

    @Column()
    @ApiProperty({type: Date})
    data: Orcamento['data'];

    @Column()
    @ApiProperty({type: String})
    unidadeId: Orcamento['unidadeId'];

    @Column()
    @ApiProperty({ type: String })
    clienteId: Orcamento['clienteId'];

    @Column()
    @ApiProperty({ type: String })
    statusPedido: Orcamento['statusPedido'];

    @Column()
    @ApiProperty({ type: String })
    condicaoPagamento: Orcamento['condicaoPagamento'];

    @Column()
    @ApiProperty({ type: String })
    prazoPagamento: Orcamento['prazoPagamento'];

    @Column()
    @ApiProperty({ type: String })
    observacao: Orcamento['observacao'];

    @Column()
    @ApiProperty({ type: Number })
    status: Orcamento['status'];

    @Column()
    @ApiProperty({ type: String })
    createAt: Orcamento['createAt'];

    @Column()
    @ApiProperty({ type: String })
    userCreated: Orcamento['userCreated'];

    @ApiProperty({ type: Date })
    deletedAt: Date;

    @ApiProperty({ type: String })
    deletedUserId: string;

    @Column()
    @ApiProperty({ type: [Produto] })
    produtos: Produto[];

    addProduto(produto: Produto) {
        if(!this.produtos) {
            this.produtos = [produto];
            return;
        }
        this.produtos.push(produto);
    }

    findProduto(produtoId: string) {
        const produtos = this.getProduto();
        return produtos.find(produto => produto.id.equals(produtoId));
    }

    updateProduto(produtoId: string, produto: Produto) {
        const updateProdutoIndex = this
            .produtos
            .findIndex(produtos => produtos.id.equals(produtoId));
        if(updateProdutoIndex !== 1) {
            this.produtos[updateProdutoIndex] = produto;
        }
    }

    getProduto() {
        if(!this.produtos) {
            return[];
        }

        const notDeleteProduto = this
            .produtos
            .filter(produto => produto.produto);
        return notDeleteProduto.map(produto => new Produto(produto));
    }

    deleteProduto(produtoId: string | ObjectID) {
        const deleteProdutoIndex = this
            .produtos
            .findIndex(produto =>  produto.id === produtoId);
        if(deleteProdutoIndex !== -1) {
            this.produtos.splice(deleteProdutoIndex, 1);
        }
    }

}

