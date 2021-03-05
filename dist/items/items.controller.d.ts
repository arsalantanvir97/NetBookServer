import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';
import { Response } from 'express';
export declare class ItemsController {
    private readonly itemsService;
    constructor(itemsService: ItemsService);
    findAll(): Promise<Item[]>;
    findOne(id: any): Promise<Item>;
    create(createItemDto: CreateItemDto): Promise<Item>;
    delete(id: any): Promise<Item>;
    update(updateItemDto: CreateItemDto, id: any): Promise<Item>;
    queries(createItemDto: CreateItemDto, id: any, res: Response): Promise<void>;
}
