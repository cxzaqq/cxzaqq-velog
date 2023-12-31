import {
  Controller,
  Get,
  Post,
  Body,
  UseFilters,
  ForbiddenException,
} from '@nestjs/common';
import { CreateCatDto } from '../cats/dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interface/cat.interface';
import { Roles } from 'src/roles/roles.decorator';

@Roles(['user'])
@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  @Roles(['admin'])
  async create(@Body() createCatDto: CreateCatDto) {
    // throw new ForbiddenException();
    return this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get('/test')
  async test() {
    return await this.catsService.test();
  }
}
