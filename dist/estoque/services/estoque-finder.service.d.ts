import { UnidadeRepository } from "src/unidade/respositories/unidade.repository";
import { EstoqueRepository } from "../repositories/estoque.repository";
export declare class EstoqueFinderService {
    private estoqueRepository;
    private unidadeRepository;
    constructor(estoqueRepository: EstoqueRepository, unidadeRepository: UnidadeRepository);
    getAll(): Promise<import("../entities/estoque.entity").EstoqueEntity[]>;
    getByName(produto: string): Promise<import("../entities/estoque.entity").EstoqueEntity[]>;
    getByUnidadeId(id: string): Promise<import("../entities/estoque.entity").EstoqueEntity[]>;
    getById(id: string): Promise<import("../entities/estoque.entity").EstoqueEntity>;
    getEstoqueByUnidadeId(unidadeid: string): Promise<import("../entities/estoque.entity").EstoqueEntity[]>;
    searchAll(result: string, unidadeid: string): Promise<import("../entities/estoque.entity").EstoqueEntity[]>;
}
