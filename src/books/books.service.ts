/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable, NotFoundException } from '@nestjs/common';
import { BooksRepository } from './books.repository';
import { EditBookDto } from './dtos/edit-book.dto';

@Injectable()
export class BooksService {
  constructor(public booksRepository: BooksRepository) {}
  async create() {}

  async edit(id: string, editBookDto: EditBookDto) {
    const book = await this.booksRepository.findOne(id);
    if (!book) {
      throw new NotFoundException('Book not found');
    }

    // book.title = editBookDto.title ?? book.title;
    // author.title = editBookDto.author ?? book.author;

    return this.booksRepository.store(book);
  }

  async findOne(id: string) {
    const book = await this.booksRepository.findOne(id);
    if (!book) {
      throw new NotFoundException('Book not found');
    }
    return book;
  }

  async remove(id: string) {
    const book = await this.booksRepository.findOne(id);
    if (!book) {
      throw new NotFoundException('Book not found');
    }
    return this.booksRepository.remove(id);
  }

  async findSearchedMany() {}

  async findRandomOne() {}

  async findMany() {}
}
