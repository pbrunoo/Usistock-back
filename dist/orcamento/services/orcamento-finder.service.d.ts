import { OrcamentoRepository } from "../respositories/orcamento.repository";
export declare class OrcamentoFinderService {
    private orcamentoRepository;
    constructor(orcamentoRepository: OrcamentoRepository);
    getAll(): Promise<import("../entities/orcamento.entity").OrcamentoEntity[]>;
    getByName(cliente: string): Promise<import("../entities/orcamento.entity").OrcamentoEntity[]>;
    getByUnidadeId(id: string): Promise<import("../entities/orcamento.entity").OrcamentoEntity[]>;
    getById(id: string): Promise<import("../entities/orcamento.entity").OrcamentoEntity>;
    getOrcamentoByUnidadeId(unidadeid: string): Promise<import("../entities/orcamento.entity").OrcamentoEntity[]>;
    searchAll(result: string, unidadeId: string): Promise<import("../entities/orcamento.entity").OrcamentoEntity[]>;
}
