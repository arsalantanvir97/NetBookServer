
import { Injectable } from '@nestjs/common';
import { Package } from './interfaces/package.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PackagesService {
    constructor(@InjectModel('Package') private readonly packageModel: Model<Package>) {}
    async findAll(): Promise<Package[]> {
        return await this.packageModel.find();
      }
    

}

