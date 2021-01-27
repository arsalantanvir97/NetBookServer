import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EdgesController } from './edges.controller';
import {NodeSchema}from '../nodes/schemas/node.schema'
import { EdgesService } from './edges.service'
import { EdgeSchema } from './schemas/edge.schema'
import{ItemSchema}from '../items/schemas/item.schema'

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Edge', schema: EdgeSchema }]),MongooseModule.forFeature([{ name: 'Node', schema: NodeSchema }]),MongooseModule.forFeature([{ name: 'Item', schema: ItemSchema }])],
  controllers: [EdgesController],
  providers: [EdgesService],
})
export class EdgesModule {}
