import { Injectable } from '@nestjs/common';
import { Node } from './interfaces/node.interface'
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class NodesService {
  constructor(@InjectModel('Node') private readonly nodeModel: Model<Node>) {}

  async findAll(): Promise<Node[]> {
    return await this.nodeModel.find();
  }

  async findOne(id: string): Promise<Node> {
    return await this.nodeModel.findOne({ _id: id });
  }

  async create(node: Node,nodeid:string): Promise<Node> {
    
    const newNode = new this.nodeModel(node);
     await newNode.save(); 
     return await this.nodeModel.find(nodeid)
  }

   async filterNode(nodeid: string): Promise<Node> {
    
     return await this.nodeModel.find({nodeid}); 
   }

  async delete(id: string): Promise<Node> {
    return await this.nodeModel.findByIdAndRemove(id);
  }

  async update(id: string, node: Node): Promise<Node> {
    return await this.nodeModel.findByIdAndUpdate(id, node, { new: true });
  }
}
