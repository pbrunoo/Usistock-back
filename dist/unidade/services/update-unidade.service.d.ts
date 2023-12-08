import { UnidadeRepository } from "src/unidade/respositories/unidade.repository";
import { UpdateUnidadeRequest } from "src/unidade/requests/update-unidade.request";
export declare class UpdateUnidadeService {
    private unidadeRepository;
    constructor(unidadeRepository: UnidadeRepository);
    update(unidadeId: string, updateUnidadeRequest: UpdateUnidadeRequest): Promise<import("typeorm").UpdateResult>;
}
