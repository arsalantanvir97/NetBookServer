import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
Res,
  Param,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';
import {Request,Response}from 'express'
@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Promise<Item> {
    return this.itemsService.findOne(id);
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): Promise<Item> {
    console.log("logging user in")
    return this.itemsService.create(createItemDto,createItemDto.email);
  }

  @Delete(':id')
  delete(@Param('id') id): Promise<Item> {
    return this.itemsService.delete(id);
  }

  @Put(':id')
  update(@Body() updateItemDto: CreateItemDto, @Param('id') id): Promise<Item> {
    return this.itemsService.update(id, updateItemDto);
  }
  @Put('up/:id')
  updates(@Body() updateItemDto: CreateItemDto, @Param('id') id): Promise<Item> {
    
        return this.itemsService.updates( updateItemDto.packageid,id);
    console.log("updadte user packageid")
  }
  @Post(':id')
  queries(@Body() createItemDto: CreateItemDto, @Param('id') id,@Res() res:Response) {
    return this.itemsService.queries(id,createItemDto.query,res);
  }
}
