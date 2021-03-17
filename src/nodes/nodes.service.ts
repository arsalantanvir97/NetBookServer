import { Injectable } from '@nestjs/common';
import { Node } from './interfaces/node.interface'
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Edge } from 'src/edges/interfaces/edge.interface';
import { Console } from 'console';

@Injectable()
export class NodesService {
  constructor(
    @InjectModel('Node') private readonly nodeModel: Model<Node>,
    @InjectModel('Edge') private readonly edgeModel: Model<Edge>
  ) { }

  async findAll(): Promise<Node[]> {
    return await this.nodeModel.find();
  }

  async findOne(id: string): Promise<Node> {
    return await this.nodeModel.findOne({ _id: id });
  }

  async create(node: Node, id: string): Promise<any> {
    const checknode = await this.nodeModel.findOne({ id })
    if (checknode) {
      return { message: 'Node Already exists' }
    } else {
      const newNode = new this.nodeModel(node);
      return await newNode.save();
    }
  }
  async creates(node: Node): Promise<any> {
    console.log("body", node)
    const nodes = await this.nodeModel.insertMany(node)
    console.log('nodes', nodes)

  }
  async filterNode(nodeid: string): Promise<any> {
    let nodes = await this.nodeModel.find({ nodeid });
    let links = await this.edgeModel.find({ edgeid: nodeid }).populate('source').populate('target');
    return { nodes, links }
  }

  async delete(id: string): Promise<Node> {
    await this.edgeModel.find({ source: id }).remove().exec()
    await this.edgeModel.find({ target: id }).remove().exec()
    return await this.nodeModel.findByIdAndRemove(id);
  }


  async update(id: string, node: Node): Promise<Node> {

    return await this.nodeModel.findByIdAndUpdate(id, node, { new: true });
  }
}
