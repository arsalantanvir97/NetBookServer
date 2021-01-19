import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsController } from './items/items.controller';
import { ItemsService } from './items/items.service';
import { ItemsModule } from './items/items.module';
import {NodesModule}from './nodes/nodes.module'
import { MongooseModule } from '@nestjs/mongoose';
import { NodesController } from './nodes/nodes.controller';
import { NodesService } from './nodes/nodes.service';
import config from './config/keys';

@Module({
  imports: [ItemsModule,NodesModule, MongooseModule.forRoot(config.mongoURI)],
  controllers: [AppController, ItemsController, NodesController],
  providers: [AppService, ItemsService, NodesService],
})
export class AppModule {}
