import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dtos/create-book.dto';
import { EditBookDto } from './dtos/edit-book.dto';

@Controller('books')
export class BooksController {
  constructor(public booksService: BooksService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() body: CreateBookDto) {
    return body;
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  async edit(@Param('id') id: string, @Body() body: EditBookDto) {
    console.log(id, body);
    return { id, body };
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async getOne(@Param('id') id: string) {
    return this.booksService.findOne(id);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') id: string) {
    return this.booksService.remove(id);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async getSearchedBooks(@Query() search: any): Promise<any> {
    console.log(search);
    return search;
  }

  @Get('random')
  @HttpCode(HttpStatus.OK)
  async getRandomOne() {
    console.log('hey there');
  }

  @Get('favorites')
  @HttpCode(HttpStatus.OK)
  async getMany() {
    console.log('hey there again');
  }
}
