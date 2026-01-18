import { IsString, IsNotEmpty, IsDate } from 'class-validator';
import { Transform } from 'class-transformer';

export class BorrowedBooksDto {
  @IsString()
  @IsNotEmpty()
  bookId!: string;
}
