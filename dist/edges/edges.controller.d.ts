import { CreateEdgeDto } from './dto/create-edge.dto';
import { EdgesService } from './edges.service';
import { Edge } from './interfaces/edge.interface';
export declare class EdgesController {
    private readonly edgesService;
    constructor(edgesService: EdgesService);
    findAll(): Promise<Edge[]>;
    findOne(id: any): Promise<Edge>;
    create(createEdgeDto: CreateEdgeDto): Promise<Edge>;
    filterEdge(CreateEdgeDto: CreateEdgeDto): Promise<Edge>;
    delete(id: any): Promise<Edge>;
    update(CreateEdgeDto: CreateEdgeDto, id: any): Promise<Edge>;
}
