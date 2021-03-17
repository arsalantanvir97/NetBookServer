import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Body,
    Param,
  } from '@nestjs/common';
  import { CreateNodeDto } from './dto/create-node.dto'
  import { NodesService } from './nodes.service';
  import { Node } from './interfaces/node.interface'
  
  @Controller('nodes')
  export class NodesController {
    constructor(private readonly nodesService: NodesService) {}
  
    @Get()
    findAll(): Promise<Node[]> {
      return this.nodesService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id): Promise<Node> {
      return this.nodesService.findOne(id);
    }
  
    @Post()
    create(@Body() createNodeDto: CreateNodeDto): Promise<Node> {
      return this.nodesService.create(createNodeDto,createNodeDto.id)
    }
    @Post('/many')
    creates(@Body() createNodeDto: CreateNodeDto): Promise<Node> {
      return this.nodesService.creates(createNodeDto)
    }
     @Post('/get')
     filterNode(@Body() createNodeDto: CreateNodeDto): Promise<Node> {
       return this.nodesService.filterNode(createNodeDto.nodeid);
     }
  
    @Delete(':id')
    delete(@Param('id') id): Promise<Node>  {
      return this.nodesService.delete(id);
    }
  
    @Put(':id')
    update(@Body() updateNodeDto: CreateNodeDto, @Param('id') id): Promise<Node> {
      return this.nodesService.update(id, updateNodeDto);
    }
  }
  