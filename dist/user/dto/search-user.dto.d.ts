import { ObjectID } from 'typeorm';
export declare class SearchUserDto {
    readonly id: ObjectID;
    readonly login: string;
    readonly nome: string;
    readonly email: string;
    readonly telefone: string;
    readonly cidade: string;
    readonly unidadeId: string;
}
