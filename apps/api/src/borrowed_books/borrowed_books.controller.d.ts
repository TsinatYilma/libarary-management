import { BorrowedBooksService } from './borrowed_books.service';
import { BorrowedBooksDto } from './dto/borrowed_books.dto';
import { TokenService } from './token.service';
export declare class BorrowedBooksController {
    private borrowedBooksService;
    private tokenService;
    constructor(borrowedBooksService: BorrowedBooksService, tokenService: TokenService);
    borrowBook(authHeader: string, dto: BorrowedBooksDto): Promise<void>;
    getAllBorrowedBooks(authHeader: string): Promise<object>;
    returnBook(id: string): Promise<void>;
    returnAllBooks(authHeader: string): void;
}
