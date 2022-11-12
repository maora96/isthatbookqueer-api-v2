import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { BooksModule } from './books/books.module';

async function bootstrap() {
  const app = await NestFactory.create(BooksModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000, () => console.log(`Listening on :::3000/`));
}
bootstrap();
