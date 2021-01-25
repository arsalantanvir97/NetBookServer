import { CreateNodeDto } from './dto/create-node.dto';
import { NodesService } from './nodes.service';
import { Node } from './interfaces/node.interface';
export declare class NodesController {
    private readonly nodesService;
    constructor(nodesService: NodesService);
    findAll(): Promise<Node[]>;
    findOne(id: any): Promise<Node>;
    create(createNodeDto: CreateNodeDto): Promise<Node>;
    filterNode(createNodeDto: CreateNodeDto): Promise<Node>;
    delete(id: any): Promise<Node>;
    update(updateNodeDto: CreateNodeDto, id: any): Promise<Node>;
}
