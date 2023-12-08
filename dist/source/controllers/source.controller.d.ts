import { SourcetEntity } from '../entities/source.entity';
import { NewSourceRequest } from '../requests/new-source';
import { CreateSourceService } from '../services/create-source.service';
import { UpdateSourceService } from '../services/update-source.service';
import { SourceEraserService } from '../services/source-eraser.service';
import { SourceFinderService } from '../services/source-finder.service';
import { UpdateSourceRequest } from '../requests/update-source';
export declare class SourceController {
    private createSourceService;
    private updateSourceService;
    private sourceEraserService;
    private sourceFinderService;
    constructor(createSourceService: CreateSourceService, updateSourceService: UpdateSourceService, sourceEraserService: SourceEraserService, sourceFinderService: SourceFinderService);
    create(createSourceRequest: NewSourceRequest): Promise<NewSourceRequest & SourcetEntity>;
    update(id: string, upodateSourceRequest: UpdateSourceRequest): Promise<void>;
    getAll(): Promise<SourcetEntity[]>;
    getByCostumerName(sourceName: string): Promise<SourcetEntity[]>;
    delete(id: string): Promise<void>;
}
