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
    const checkitem=await this.itemModel.findOne({email}).populate('packageid')

    if(checkitem){
      return checkitem
    }else{
    const newItem = new this.itemModel(item);
    await newItem.save(); 
    const updateduser=await this.itemModel.findById(newItem._id).populate('packageid')
    console.log('pop',updateduser)
    return updateduser
    }
  }

  async delete(id: string): Promise<Item> {
    return await this.itemModel.findByIdAndRemove(id);
  }

  async update(id: string, item: Item): Promise<Item> {
    return await this.itemModel.findByIdAndUpdate(id, item, { new: true });
  }
  async queries(id:string,query:string,res:any){
const user=await this.itemModel.findOne({_id:id}).populate('packageid')
if(user){
console.log('user',user)

  if(user.AIQueries<user.packageid.AIQueries){
    let userqueries=await user.AIQueries+1
    console.log('userqueries',userqueries)
    user.AIQueries=userqueries
    let userupdated=  await user.save();
    res.json({userupdated, message:'You have succesfully asked your API query  '})
  }
    else{
      res.json({message:'You have reached the limit of AI Queries please upgrade to basic or premium package '})}

    
    
  }
  console.log('userq',user.AIQueries)
}

// return await user.findByIdAndUpdate(id,{AIQueries:userqueries},{new:true})
  // await this.itemModel.query.save(query)
  // const countquery=this.itemModel.query.count()
  // await this.itemModel.AIQueries.save(countquery)
  // const aiqueriescount=this.itemModel.AIQueries
  // return await aiqueriescount
}
