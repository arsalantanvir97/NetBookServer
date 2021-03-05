import { Node } from './interfaces/node.interface';
import { Model } from 'mongoose';
import { Edge } from 'src/edges/interfaces/edge.interface';
export declare class NodesService {
    private readonly nodeModel;
    private readonly edgeModel;
    constructor(nodeModel: Model<Node>, edgeModel: Model<Edge>);
    findAll(): Promise<Node[]>;
    findOne(id: string): Promise<Node>;
    create(node: Node, id: string): Promise<any>;
    filterNode(nodeid: string): Promise<any>;
    delete(id: string): Promise<Node>;
    update(id: string, node: Node): Promise<Node>;
}
