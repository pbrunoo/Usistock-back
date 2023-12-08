import { Entity, ObjectIdColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Empresa } from './abstractions/empresa';
import { Servicos } from './agreggate/servicos';


@Entity()
export class EmpresaEntity implements Empresa {
    @ObjectIdColumn()
    @ApiProperty({ type: String })
    id: Empresa['id'];

    @Column()
    @ApiProperty({ type: String })
    cnpj: Empresa['cnpj'];

    @Column()
    @ApiProperty({ type: Number })
    inscrEstadual: Empresa['inscrEstadual'];

    @Column()
    @ApiProperty({ type: String })
    razaoSocial: Empresa['razaoSocial'];

    @Column()
    @ApiProperty({ type: String })
    nomeFantasia: Empresa['nomeFantasia'];

    @Column()
    @ApiProperty({ type: String })
    cep: Empresa['cep'];

    @Column()
    @ApiProperty({ type: String })
    endereco: Empresa['endereco'];

    @Column()
    @ApiProperty({ type: String })
    complemento: Empresa['complemento'];

    @Column()
    @ApiProperty({ type: Number })
    numero: Empresa['numero'];

    @Column()
    @ApiProperty({ type: String })
    bairro: Empresa['bairro'];
    
    @Column()
    @ApiProperty({ type: String })
    cidade: Empresa['cidade'];

    @Column()
    @ApiProperty({ type: String })
    uf: Empresa['uf'];

    @Column()
    @ApiProperty({ type: String })
    telefone: Empresa['telefone'];

    @Column()
    @ApiProperty({ type: String })
    email: Empresa['email'];

    @Column()
    @ApiProperty({ type: Number })
    status: Empresa['status'];

    @Column()
    @ApiProperty({ type: Number })
    pis: Empresa['pis'];

    @Column()
    @ApiProperty({ type: Number })
    cofins: Empresa['cofins'];

    @Column()
    @ApiProperty({ type: Number })
    iss: Empresa['iss'];

    @Column()
    @ApiProperty({ type: Number })
    inss: Empresa['inss'];

    @Column()
    @ApiProperty({ type: Number })
    irrf: Empresa['irrf'];

    @Column()
    @ApiProperty({ type: Number })
    csll: Empresa['csll'];

    @Column()
    @ApiProperty({ type: String })
    userCreated: Empresa['userCreated'];

    @Column()
    @ApiProperty({ type: String })
    userUpdated: Empresa['userUpdated'];

    @Column()
    @ApiProperty({ type: Date })
    createAt: Empresa['createAt'];

    @Column()
    @ApiProperty({ type: Date })
    updateAt: Empresa['updateAt'];

    @ApiProperty({ type: Date })
    deletedAt: Date;

    @ApiProperty({ type: String })
    deletedUserId: string;


    @ApiProperty({type: [Servicos] })
    @Column()
    servicos: Servicos[];

    addServicos(servicos: Servicos) {
        if(!this.servicos) {
            this.servicos = [servicos];
            return;
        }

        this.servicos.push(servicos);
    }

    deleteServicos(cnae: number) {
        if(!this.servicos) {
            return;
        }

        const deleteServicosIndex = this
            .servicos
            .findIndex(servicos => servicos.cnae === cnae);
        
        if(deleteServicosIndex !== -1) {
            this.servicos.splice(deleteServicosIndex, 1);
        }
    } 

}
