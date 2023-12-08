import { Unidade } from "../entities/abstractions/unidade";
import { Empresa } from "src/empresa/entities/abstractions/empresa";
export declare class UnityEmpresa {
    readonly id: Unidade;
    readonly nomeUnidade: Unidade;
    readonly idEmpresa: Unidade;
    readonly razaoSocial: Empresa;
    readonly status: Unidade;
    constructor(UnityEmpresa: Readonly<UnityEmpresa>);
}
