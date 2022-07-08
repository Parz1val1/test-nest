import { Cat } from './../interfaces/cat.interface';
import { CatsService } from './cats.service';
import { CreateCatDto } from './create-cat.dto';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  findAll(): Cat[] {
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Cat {
    return this.catsService.find(id);
  }

  @Post()
  create(@Body() createCatDto: CreateCatDto): Cat {
    return this.catsService.create(createCatDto);
  }
}
