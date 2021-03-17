import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Body,
    Param,
  } from '@nestjs/common';
  import { CreateEdgeDto } from './dto/create-edge.dto'
  import { EdgesService } from './edges.service';
  import { Edge } from './interfaces/edge.interface'
  
  @Controller('edges')
  export class EdgesController {
    constructor(private readonly edgesService: EdgesService) {}
  
    @Get()
    findAll(): Promise<Edge[]> {
      return this.edgesService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id): Promise<Edge> {
      return this.edgesService.findOne(id);
    }
  
    @Post()
    create(@Body() createEdgeDto: CreateEdgeDto): Promise<Edge> {
      return this.edgesService.create(createEdgeDto)
    }
    
    @Post('/many')
    creates(@Body() createEdgeDto: CreateEdgeDto): Promise<Edge> {
      return this.edgesService.creates(createEdgeDto)
    }
     @Post('/get')
     filterEdge(@Body() CreateEdgeDto: CreateEdgeDto): Promise<Edge> {
       return this.edgesService.filterEdge(CreateEdgeDto.edgeid);
     }
  
    @Delete(':id')
    delete(@Param('id') id): Promise<Edge> {
      return this.edgesService.delete(id);
    }
  
    @Put(':id')
    update(@Body() CreateEdgeDto: CreateEdgeDto, @Param('id') id): Promise<Edge> {
      return this.edgesService.update(id, CreateEdgeDto);
    }
  }
  