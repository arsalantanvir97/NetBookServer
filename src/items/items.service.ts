import { Injectable, Res } from '@nestjs/common';
import { Item } from './interfaces/item.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { request } from 'express';

@Injectable()
export class ItemsService {
  constructor(
    @InjectModel('Item') private readonly itemModel: Model<Item>, // @InjectModel('Package') private readonly packageModel: Model<Package>,
  ) {}

  async findAll(): Promise<Item[]> {
    return await this.itemModel.find();
  }

  async findOne(id: string): Promise<Item> {
    return await this.itemModel.findOne({ _id: id });
  }

  async create(item: Item, email: string): Promise<Item> {
    const checkitem = await this.itemModel
      .findOne({ email })
      .populate('packageid');

    if (checkitem) {
      return checkitem;
    } else {
      // const packageid = this.packageModel.findOne({ type: 'Free' });
      // console.log('packageid', packageid);
      const newItem = new this.itemModel({
        ...item,
        packageid: '6664e7be7cbe0858b1db144a',
      });
      await newItem.save();
      const updateduser = await this.itemModel
        .findById(newItem._id)
        .populate('packageid');
      console.log('pop', updateduser);
      return updateduser;
    }
  }

  async delete(id: string): Promise<Item> {
    return await this.itemModel.findByIdAndRemove(id);
  }
  async updates(packageid: string, id: string): Promise<Item> {
    console.log('packageid', packageid, id);
    const user = await this.itemModel.findOne({ _id: id });
    console.log('userssssss', user);
    if (user) {
      console.log('userexists');
      user.packageid = packageid;
    }
    await user.save();
    const newwuser = await this.itemModel
      .findById(user._id)
      .populate('packageid');
    console.log('popss', newwuser);
    return await newwuser.save();
  }

  async update(id: string, item: Item): Promise<Item> {
    return await this.itemModel.findByIdAndUpdate(id, item, { new: true });
  }
  async queries(id: string, query: string, res: any) {
    const user = await this.itemModel
      .findOne({ _id: id })
      .populate('packageid');
    if (user) {
      console.log('user', user);

      if (user.AIQueries < user.packageid.AIQueries) {
        let userqueries = (await user.AIQueries) + 1;
        console.log('userqueries', userqueries);
        user.AIQueries = userqueries;
        let userupdated = await user.save();
        res.json({
          userupdated,
          message: 'You have succesfully asked your API query  ',
        });
      } else {
        res.json({
          message:
            'You have reached the limit of AI Queries please upgrade to basic or premium package ',
        });
      }
    }
    console.log('userq', user.AIQueries);
  }

  // return await user.findByIdAndUpdate(id,{AIQueries:userqueries},{new:true})
  // await this.itemModel.query.save(query)
  // const countquery=this.itemModel.query.count()
  // await this.itemModel.AIQueries.save(countquery)
  // const aiqueriescount=this.itemModel.AIQueries
  // return await aiqueriescount
}
