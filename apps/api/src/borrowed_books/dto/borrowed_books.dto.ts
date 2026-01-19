import { IsString, IsNotEmpty, IsDate, IsEmail } from 'class-validator';
import { Transform } from 'class-transformer';

export class BorrowedBooksDto {
  @IsString()
  @IsNotEmpty()
  bookId!: string;

  @IsEmail()
  User_email!: string;
}
