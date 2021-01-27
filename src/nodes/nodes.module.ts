import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EdgeSchema } from '../edges/schemas/edge.schema';
import { NodesController } from './nodes.controller';
import { NodesService } from './nodes.service'
import { NodeSchema } from './schemas/node.schema'
import {ItemSchema}from '../items/schemas/item.schema'

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Node', schema: NodeSchema }]), MongooseModule.forFeature([{ name: 'Edge', schema: EdgeSchema }]),MongooseModule.forFeature([{ name: 'Item', schema: ItemSchema }])],
  controllers: [NodesController],
  providers: [NodesService],
})
export class NodesModule { }
