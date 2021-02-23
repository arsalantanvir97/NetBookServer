import { Injectable, Res } from '@nestjs/common';
import { Item } from './interfaces/item.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { request } from 'express';

@Injectable()
export class ItemsService {
  constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) {}

  async findAll(): Promise<Item[]> {
    return await this.itemModel.find();
  }

  async findOne(id: string): Promise<Item> {
    return await this.itemModel.findOne({ _id: id });
  }

  async create(item: Item,email:string): Promise<Item> {
    const checkitem=await this.itemModel.findOne({email})

    if(checkitem){
      return checkitem
    }else{
    const newItem = new this.itemModel(item);
    

    return await newItem.save(); }
  }

  async delete(id: string): Promise<Item> {
    return await this.itemModel.findByIdAndRemove(id);
  }

  async update(id: string, item: Item): Promise<Item> {
    return await this.itemModel.findByIdAndUpdate(id, item, { new: true });
  }
  async queries(id:string,query:string,res:any){
const user=await this.itemModel.findOne({_id:id}).populate('package')
if(user){
console.log('user',user)
let userqueries=await user.AIQueries+1
console.log('userqueries',userqueries)
user.AIQueries=userqueries
let userupdated=  await user.save();
res.json({message:'You have succesfully made a query regarding AI'})}

console.log('userq',user.AIQueries)

// return await user.findByIdAndUpdate(id,{AIQueries:userqueries},{new:true})
  // await this.itemModel.query.save(query)
  // const countquery=this.itemModel.query.count()
  // await this.itemModel.AIQueries.save(countquery)
  // const aiqueriescount=this.itemModel.AIQueries
  // return await aiqueriescount
}}
