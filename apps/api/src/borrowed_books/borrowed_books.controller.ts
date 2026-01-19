import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Headers,
  Param,
} from '@nestjs/common';
import { BorrowedBooksService } from './borrowed_books.service';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from '../auth/roles/role.enum';
import { BorrowedBooksDto } from './dto/borrowed_books.dto';
import { TokenService } from './token.service';
import { PublicRoute } from '../auth/decorators/public.decorators';

@Controller('books/borrowed')
export class BorrowedBooksController {
  constructor(
    private borrowedBooksService: BorrowedBooksService,
    private tokenService: TokenService,
  ) {}
  @Post('')
  @Roles(Role.LIBRARY_ADMIN)
  borrowBookForUser(@Body() dto: BorrowedBooksDto) {
    return this.borrowedBooksService.borrowBook(dto);
  }
  @Get('count')
  async count() {
    return { count: await this.borrowedBooksService.count() };
  }

  @Roles(Role.USER)
  @Get()
  async getAllBorrowedBooks(
    @Headers('authorization') authHeader: string,
  ): Promise<object> {
    const token = authHeader.replace('Bearer ', '');
    const userId = this.tokenService.extractEmail(token);
    return this.borrowedBooksService.getAllBorrowedBooks(userId);
  }

  @Roles(Role.USER)
  @Patch(':id')
  async returnBook(@Param('id') id: string) {
    this.borrowedBooksService.returnBook(id);
  }

  @Delete()
  @PublicRoute() // Correctly set role
  returnAllBooks(@Headers('authorization') authHeader: string) {
    const token = authHeader.replace('Bearer ', '');
    const userId = this.tokenService.extractEmail(token);
    this.borrowedBooksService.returnAllBooks(userId);
  }
}
