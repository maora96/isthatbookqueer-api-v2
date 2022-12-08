import { Injectable } from '@nestjs/common';

/* eslint-disable @typescript-eslint/no-empty-function */
@Injectable()
export class BooksRepository {
  async create() {}

  async store(book: any) {
    return book;
  }

  async findOne(id: string) {
    return id;
  }

  async remove(id: string) {}

  async findSearchedMany() {}

  async findRandomOne() {}

  async findMany() {}
}
