import { BlackListRepository } from "../repositories/blacklist.repository";
export declare class BlacklistEraserService {
    private blackListRepository;
    constructor(blackListRepository: BlackListRepository);
    delete(id: string): Promise<void>;
}
