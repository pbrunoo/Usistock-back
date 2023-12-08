import { ApiProperty } from "@nestjs/swagger";
import { ObjectID } from "bson";
import { Column, Entity, ObjectIdColumn } from "typeorm";
import { Estoque } from "./abstractions/estoque";
import { HistoricoEstoque } from "./agreggate/historico-estoque";

@Entity()
export class EstoqueEntity implements Estoque {
    @ObjectIdColumn()
    @ApiProperty({type: String})
    id: Estoque['id'];

    @Column()
    @ApiProperty({type: String})
    produto: Estoque['produto'];

    @Column()
    @ApiProperty({type: String})
    unidadeId: Estoque['unidadeId'];

    @Column()
    @ApiProperty({type: Number})
    status: Estoque['status'];

    @Column()
    @ApiProperty({type: Number})
    estoqueDisponivel: Estoque['estoqueDisponivel']; 
    
    @Column()
    @ApiProperty({type: String})
    vlTotal: Estoque['vlTotal'];  

    @Column()
    @ApiProperty({ type: Date })
    createAt: Estoque['createAt'];

    @Column()
    @ApiProperty({ type: String })
    userCreated: Estoque['userCreated'];


    @ApiProperty({ type: Date })
    deletedAt: Date;

    @ApiProperty({ type: String })
    deletedUserId: string;

    @ApiProperty({type: [HistoricoEstoque]})
    @Column()
    historicoEstoque: HistoricoEstoque[];

    addHistoricoEstoque(historicoEstoque: HistoricoEstoque) {
        if(!this.historicoEstoque) {
            this.historicoEstoque = [historicoEstoque];
            return;
        }
        this.historicoEstoque.push(historicoEstoque);
    }

    findHistorico(historicoId: string) {
        const historicos = this.getHistorico();
        return historicos.find(historicoEstoque => historicoEstoque.id.equals(historicoId));
    }

    updateHistoricoEstoque(historicoId: string, historico: HistoricoEstoque) {
        const updateHistoricoEstoqueIndex = this
            .historicoEstoque
            .findIndex(historicoEstoques => historicoEstoques.id.equals(historicoId));
        if(updateHistoricoEstoqueIndex !== -1) {
            this.historicoEstoque[updateHistoricoEstoqueIndex] = historico;
        }
    }

    getHistorico() {
        if (!this.historicoEstoque) {
            return [];
        }

        const notDeleteHistorico = this
            .historicoEstoque
            .filter(historicos => historicos.vlUnitario);
        return notDeleteHistorico.map(historicos => new HistoricoEstoque(historicos));
    }

    deleteHistoricoEstoque(historicoId: string | ObjectID) {
       const deleteHistoricoEstoqueIndex = this
            .historicoEstoque
            .findIndex(historicoEstoques => historicoEstoques.id.equals(historicoId));
        if(deleteHistoricoEstoqueIndex !== -1) {
            this.historicoEstoque.splice(deleteHistoricoEstoqueIndex, 1);
        }
    }
    
}