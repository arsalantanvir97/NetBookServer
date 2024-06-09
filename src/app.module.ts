import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsController } from './items/items.controller';
import { ItemsService } from './items/items.service';
import { ItemsModule } from './items/items.module';
import { NodesModule } from './nodes/nodes.module';
import { EdgesModule } from './edges/edge.module';
import { PackagesModule } from './packages/packages.module';
import { MongooseModule } from '@nestjs/mongoose';
import { NodesController } from './nodes/nodes.controller';
import { NodesService } from './nodes/nodes.service';
import { EdgesController } from './edges/edges.controller';
import { EdgesService } from './edges/edges.service';
import { PackagesController } from './packages/packages.controller';
import { PackagesService } from './packages/packages.service';
import config from './config/keys';

@Module({
  imports: [
    ItemsModule,
    NodesModule,
    EdgesModule,
    PackagesModule,
    MongooseModule.forRoot(config.mongoURI),
  ],
  controllers: [
    AppController,
    ItemsController,
    NodesController,
    EdgesController,
    PackagesController,
  ],
  providers: [
    AppService,
    ItemsService,
    NodesService,
    EdgesService,
    PackagesService,
  ],
})
export class AppModule {}
