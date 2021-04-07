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
    console.log('node', node)
    // let checknode = await this.nodeModel.find({ nodeid: node.nodeid })
    // console.log('checknode', checknode)
    const checknode = await this.nodeModel.findOne({ id, nodeid: node.nodeid })
    console.log('checkednode', checknode)
    if (checknode) {
      return { message: 'Node Already exists' }
    } else {
      const newNode = new this.nodeModel(node);
      console.log('newNode', newNode)
      return await newNode.save();
    }
  }
  async creates(node: any): Promise<any> {
    console.log('node', node, node[0].nodeid)
    let nodes;
    let noddes;

    noddes = await this.nodeModel.find({ nodeid: node[0].nodeid })
    console.log('noddes', noddes)
    noddes = node.filter(nd => {
      let flag = true
      for (let nod of noddes) {
        if (nd.id === nod.id) {

          flag = false
        }

      }
      return flag
    })
    console.log('noded', noddes)
    try {
      // console.log("body", node)
      nodes = await this.nodeModel.insertMany(noddes, { ordered: false })
      // console.log('nodes', nodes)

    }
    catch (error) {
      if (error.message.indexOf("11000") != -1) {
        // run some code here //
        console.log("dup error")
        console.log('nodee', nodes)
        return nodes

      }
    }
    finally {
      console.log('noddde', nodes)
      return nodes

    }

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
