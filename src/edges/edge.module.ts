import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EdgesController } from './edges.controller';
import { EdgesService } from './edges.service'
import { EdgeSchema } from './schemas/edge.schema'

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Edge', schema: EdgeSchema }])],
  controllers: [EdgesController],
  providers: [EdgesService],
})
export class EdgesModule {}
