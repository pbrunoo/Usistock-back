import { SourceRepository } from "../repositories/source.repository";
import { UpdateSourceRequest } from "../requests/update-source";
export declare class UpdateSourceService {
    private blacklistRepository;
    constructor(blacklistRepository: SourceRepository);
    update(costumerId: string, updateSourceRequest: UpdateSourceRequest): Promise<import("typeorm").UpdateResult>;
}
