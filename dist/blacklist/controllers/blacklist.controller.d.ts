import { BlackListEntity } from '../entities/blacklist.entity';
import { NewBlacklistRequest } from '../requests/new-blacklist';
import { CreateBlackListService } from '../services/create-blacklist.service';
import { UpdateBlackListService } from '../services/update-blacklist.service';
import { BlacklistEraserService } from '../services/blacklist-eraser.service';
import { BlacklistFinderService } from '../services/blacklist-finder.service';
import { UpodateBlacklistRequest } from '../requests/update-blacklist';
export declare class BlacklistController {
    private createBlackListService;
    private updateBlackListService;
    private blacklistEraserService;
    private blacklistFinderService;
    constructor(createBlackListService: CreateBlackListService, updateBlackListService: UpdateBlackListService, blacklistEraserService: BlacklistEraserService, blacklistFinderService: BlacklistFinderService);
    create(createAnalisysObjectRequest: NewBlacklistRequest): Promise<NewBlacklistRequest & BlackListEntity>;
    update(id: string, upodateBlacklistRequest: UpodateBlacklistRequest): Promise<void>;
    getAll(): Promise<BlackListEntity[]>;
    getByCostumerName(costumerName: string): Promise<BlackListEntity[]>;
    delete(id: string): Promise<void>;
}
