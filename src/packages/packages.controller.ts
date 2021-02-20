import { Controller, Get,
    Post,
    Put,
    Delete,
    Res,
    Body,
    Param, } from '@nestjs/common';
    import { CreatePackageDto } from './dto/create-package.dto';
import { PackagesService } from './packages.service';
import { Package } from './interfaces/package.interface';
import {Request,Response}from 'express'

@Controller('packages')
export class PackagesController {
  constructor(private readonly packagesService: PackagesService) {}

@Get()
findAll(): Promise<Package[]> {
  return this.packagesService.findAll();
}

@Post()
create(@Body() createPackageDto: CreatePackageDto,@Res()res:Response) {
  return this.packagesService.create(createPackageDto.email,res);
}

@Post('/subscription')
createsubscription(@Body() createPackageDto: CreatePackageDto,@Res() res:Response) {
  return this.packagesService.createsubscription(createPackageDto.payment_method,createPackageDto.email,createPackageDto.packageid,res);
}

}
