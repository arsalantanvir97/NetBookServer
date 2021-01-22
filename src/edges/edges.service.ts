import { Injectable } from '@nestjs/common';
import { Edge } from './interfaces/edge.interface'
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class EdgesService {
  constructor(@InjectModel('Edge') private readonly edgeModel: Model<Edge>) {}

  async findAll(): Promise<Edge[]> {
    return await this.edgeModel.find();
  }

  async findOne(id: string): Promise<Edge> {
    return await this.edgeModel.findOne({ _id: id });
  }

  async create(edge: Edge): Promise<Edge> {
    
    const newEdge = new this.edgeModel(edge);
     return await newEdge.save(); 
     
  }

   async filterEdge(edgeid: string): Promise<Edge> {
    
     return await this.edgeModel.find({edgeid}); 
   }

  async delete(id: string): Promise<Edge> {
    return await this.edgeModel.findByIdAndRemove(id);
  }

  async update(id: string, edge: Edge): Promise<Edge> {
    return await this.edgeModel.findByIdAndUpdate(id, edge, { new: true });
  }
}
