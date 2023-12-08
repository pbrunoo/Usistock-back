import { Entity, ObjectIdColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Funcionario } from './abstractions/funcionario';
import { Trabalhista } from './agreggate/trabalhista';

@Entity()
export class FuncionarioEntity implements Funcionario {
    @ObjectIdColumn()
    @ApiProperty({ type: String })
    id: Funcionario['id'];

    @Column()
    @ApiProperty({ type: String })
    nomeCompleto: Funcionario['nomeCompleto'];

    @Column()
    @ApiProperty({ type: String })
    rg: Funcionario['rg'];

    @Column()
    @ApiProperty({ type: Number })
    cpf: Funcionario['cpf'];

    @Column()
    @ApiProperty({ type: String })
    estadoCivil: Funcionario['estadoCivil'];

    @Column()
    @ApiProperty({ type: String })
    sexo: Funcionario['sexo'];

    @Column()
    @ApiProperty({ type: Date })
    dataNascimento: Funcionario['dataNascimento'];

    @Column()
    @ApiProperty({ type: Number })
    filial: Funcionario['filial'];

    @Column()
    @ApiProperty({ type: String })
    endereco: Funcionario['endereco'];

    @Column()
    @ApiProperty({ type: String })
    complemento: Funcionario['complemento'];

    @Column()
    @ApiProperty({ type: String })
    bairro: Funcionario['bairro'];

    @Column()
    @ApiProperty({ type: String })
    cidade: Funcionario['cidade'];

    @Column()
    @ApiProperty({ type: String })
    cep: Funcionario['cep'];

    @Column()
    @ApiProperty({ type: String })
    uf: Funcionario['uf'];

    @Column()
    @ApiProperty({ type: String })
    telefone: Funcionario['telefone'];

    @Column()
    @ApiProperty({ type: String })
    email: Funcionario['email'];

    @Column()
    @ApiProperty({ type: String })
    escolaridade: Funcionario['escolaridade'];

    @Column()
    @ApiProperty({ type: Number })
    status: Funcionario['status'];


    @ApiProperty({ type: String })
    userCreated: Funcionario['userCreated'];

    @ApiProperty({ type: Date })
    createAt: Funcionario['createAt'];

    @ApiProperty({ type: String })
    userUpdated: Funcionario['userUpdated'];

    @ApiProperty({ type: Date })
    updatedAt: Funcionario['updatedAt'];
    
    @ApiProperty({ type: Date })
    deletedAt: Date;

    @ApiProperty({ type: String })
    deletedUserId: string;

    @ApiProperty({ type:[Trabalhista] })
    @Column()
    trabalhista: Trabalhista[];

    addTrabalhista(trabalhista: Trabalhista) {
        if(!this.trabalhista) {
            this.trabalhista = [trabalhista];
            return;
        }

        this.trabalhista.push(trabalhista);
    }

    deleteTrabalhista(pis: number) {
        if(!this.trabalhista) {
            return;
        }

        const deleteTrabalhistaIndex = this
            .trabalhista
            .findIndex(trabalhistas => trabalhistas.pis === pis);
        
        if(deleteTrabalhistaIndex !== -1) {
            this.trabalhista.splice(deleteTrabalhistaIndex, 1);
        }
    }
}