import { Injectable } from '@nestjs/common';
import { Edge } from './interfaces/edge.interface'
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class EdgesService {
  constructor(@InjectModel('Edge') private readonly edgeModel: Model<Edge>) { }

  async findAll(): Promise<Edge[]> {
    return await this.edgeModel.find();
  }

  async findOne(id: string): Promise<Edge> {
    return await this.edgeModel.findOne({ _id: id });
  }

  async create(edge: Edge): Promise<Edge> {

    const newEdge = new this.edgeModel(edge);
    const newerEdge = await newEdge.save();
    return await this.edgeModel.find({ edgeid: newerEdge.edgeid }).populate('source').populate('target');
  }
  async creates(edge: Edge): Promise<any> {

    const newEdges = await this.edgeModel.insertMany(edge)
    console.log('edge', newEdges)
    return await this.edgeModel.findById(newEdges.edgeid).populate('source').populate('target');

  }

  async filterEdge(edgeid: string): Promise<Edge> {

    return await this.edgeModel.find({ edgeid });
  }

  async delete(id: string): Promise<Edge> {
    return await this.edgeModel.findByIdAndRemove(id);
  }

  async update(id: string, edge: Edge): Promise<Edge> {
    return await this.edgeModel.findByIdAndUpdate(id, edge, { new: true }).populate('source').populate('target');

  }
}
