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

  async create(node: Node): Promise<Node> {
    
    const newNode = new this.nodeModel(node);
    return await newNode.save(); 
  }

  async delete(id: string): Promise<Node> {
    return await this.nodeModel.findByIdAndRemove(id);
  }

  async update(id: string, node: Node): Promise<Node> {
    return await this.nodeModel.findByIdAndUpdate(id, node, { new: true });
  }
}
