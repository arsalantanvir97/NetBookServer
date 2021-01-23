import { Edge } from './interfaces/edge.interface';
import { Model } from 'mongoose';
export declare class EdgesService {
    private readonly edgeModel;
    constructor(edgeModel: Model<Edge>);
    findAll(): Promise<Edge[]>;
    findOne(id: string): Promise<Edge>;
    create(edge: Edge): Promise<Edge>;
    filterEdge(edgeid: string): Promise<Edge>;
    delete(id: string): Promise<Edge>;
    update(id: string, edge: Edge): Promise<Edge>;
}
