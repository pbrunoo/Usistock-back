import { ObjectID } from "bson";
import { OrcamentoRepository } from "src/orcamento/respositories/orcamento.repository";
export declare class ProdutoEraserService {
    private orcamentoRepository;
    constructor(orcamentoRepository: OrcamentoRepository);
    eraser(orcamentoId: string, produtoId: string | ObjectID): Promise<import("../../entities/orcamento.entity").OrcamentoEntity>;
}
