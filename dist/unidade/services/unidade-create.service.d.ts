import { UnidadeRepository } from "../respositories/unidade.repository";
import { NewUnidadeRequest } from "../requests/new-unidade.request";
export declare class CreateUnidadeService {
    private unidadeRepository;
    constructor(unidadeRepository: UnidadeRepository);
    create(newUnidadeRequest: NewUnidadeRequest): Promise<NewUnidadeRequest & import("../entities/unidade.entity").UnidadeEntity>;
}
