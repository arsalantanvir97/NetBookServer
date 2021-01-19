import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NodesController } from './nodes.controller';
import { NodesService } from './nodes.service'
import { NodeSchema } from './schemas/node.schema'

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Node', schema: NodeSchema }])],
  controllers: [NodesController],
  providers: [NodesService],
})
export class NodesModule {}
