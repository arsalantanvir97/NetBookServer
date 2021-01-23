import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EdgeSchema } from '../edges/schemas/edge.schema';
import { NodesController } from './nodes.controller';
import { NodesService } from './nodes.service'
import { NodeSchema } from './schemas/node.schema'

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Node', schema: NodeSchema }]), MongooseModule.forFeature([{ name: 'Edge', schema: EdgeSchema }])],
  controllers: [NodesController],
  providers: [NodesService],
})
export class NodesModule { }
