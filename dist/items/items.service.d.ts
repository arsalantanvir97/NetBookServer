import { Item } from './interfaces/item.interface';
import { Model } from 'mongoose';
export declare class ItemsService {
    private readonly itemModel;
    constructor(itemModel: Model<Item>);
    findAll(): Promise<Item[]>;
    findOne(id: string): Promise<Item>;
    create(item: Item, email: string): Promise<Item>;
    delete(id: string): Promise<Item>;
    updates(packageid: string, id: string): Promise<Item>;
    update(id: string, item: Item): Promise<Item>;
    queries(id: string, query: string, res: any): Promise<void>;
}
