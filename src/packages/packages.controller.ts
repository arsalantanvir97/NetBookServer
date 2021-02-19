import { Controller, Get,
    Post,
    Put,
    Delete,
    Body,
    Param, } from '@nestjs/common';
    import { CreatePackageDto } from './dto/create-package.dto';
import { PackagesService } from './packages.service';
import { Package } from './interfaces/package.interface';

@Controller('packages')
export class PackagesController {
  constructor(private readonly packagesService: PackagesService) {}

@Get()
findAll(): Promise<Package[]> {
  return this.packagesService.findAll();
}

}
