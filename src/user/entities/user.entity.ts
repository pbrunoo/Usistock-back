import { Entity, ObjectIdColumn, Column, BeforeInsert } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { User } from './abstractions/user';
import { UserTypeEnum } from '../enum/user-type.enum';
import * as bcrypt from 'bcrypt';

@Entity()
export class UserEntity implements User {
    @ObjectIdColumn()
    @ApiProperty({ type: String })
    id: User['id'];

    @Column()
    @ApiProperty({ type: String })
    login: User['login'];


    @Column()
    @ApiProperty({ type: String })
    senha: User['senha'];


    @Column()
    @ApiProperty({ type: String })
    email: User['email'];

    @Column()
    @ApiProperty({ type: String })
    nome: User['nome'];

    @Column()
    @ApiProperty({ type: String })
    sexo: User['sexo'];

    @Column()
    @ApiProperty({ type: Date })
    dataNascimento: User['dataNascimento'];


    @Column()
    @ApiProperty({ type: String })
    telefone: User['telefone'];

    @Column()
    @ApiProperty({ type: String })
    endereco: User['endereco'];

    @Column()
    @ApiProperty({ type: String })
    bairro: User['bairro'];

    @Column()
    @ApiProperty({ type: String })
    cidade: User['cidade'];

    @Column()
    @ApiProperty({ type: String })
    cep: User['cep'];

    @Column()
    @ApiProperty({ type: String, enum: UserTypeEnum })
    nivelAcesso: User['nivelAcesso'];

    @Column()
    @ApiProperty({ type: String })
    unidadeId: User['unidadeId'];

    @Column()
    @ApiProperty({ type: String })
    foto: User['foto'];

    @Column()
    @ApiProperty({ type: Number })
    status: User['status'];

    @BeforeInsert()
    async hashPassword() {
    this.senha = await bcrypt.hash(this.senha, 8);
  }

  async validatePassword(senha: string): Promise<boolean> {
    return bcrypt.compare(senha, this.senha);
  }

}
