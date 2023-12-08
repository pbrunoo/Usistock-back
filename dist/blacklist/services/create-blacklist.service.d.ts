import { BlackListEntity } from "../entities/blacklist.entity";
import { BlackListRepository } from "../repositories/blacklist.repository";
import { NewBlacklistRequest } from "../requests/new-blacklist";
export declare class CreateBlackListService {
    private blacklistRepository;
    constructor(blacklistRepository: BlackListRepository);
    create(newBlacklistRequest: NewBlacklistRequest): Promise<NewBlacklistRequest & BlackListEntity>;
}
