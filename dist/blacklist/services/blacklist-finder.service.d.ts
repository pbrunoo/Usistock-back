import { BlackListEntity } from "../entities/blacklist.entity";
import { BlackListRepository } from "../repositories/blacklist.repository";
export declare class BlacklistFinderService {
    private blacklistRepository;
    constructor(blacklistRepository: BlackListRepository);
    getAll(): Promise<BlackListEntity[]>;
    getByCostumerName(costumerName: string): Promise<BlackListEntity[]>;
}
