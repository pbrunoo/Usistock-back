import { SourcetEntity } from "../entities/source.entity";
import { SourceRepository } from "../repositories/source.repository";
import { NewSourceRequest } from "../requests/new-source";
export declare class CreateSourceService {
    private blacklistRepository;
    constructor(blacklistRepository: SourceRepository);
    create(newBlacklistRequest: NewSourceRequest): Promise<NewSourceRequest & SourcetEntity>;
}
