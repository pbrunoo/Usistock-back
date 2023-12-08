import { BlackListRepository } from "../repositories/blacklist.repository";
import { UpodateBlacklistRequest } from "../requests/update-blacklist";
export declare class UpdateBlackListService {
    private blacklistRepository;
    constructor(blacklistRepository: BlackListRepository);
    update(costumerId: string, updateBlacklistRequest: UpodateBlacklistRequest): Promise<import("typeorm").UpdateResult>;
}
