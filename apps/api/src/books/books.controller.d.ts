import { BooksService } from './books.service';
import { BookDto } from './dto/book.dto';
import { BookDetailsUpdateDto } from './dto/quantity.dto';
import { Book } from './schema/book.schema';
export declare class BooksController {
    private bookService;
    constructor(bookService: BooksService);
    addBook(dto: BookDto): Promise<Book>;
    getAllBooks(): Promise<Book[]>;
    updateQuantity(id: string, dto: BookDetailsUpdateDto): Promise<Book>;
    removeBook(id: string): Promise<{
        message: string;
    }>;
}
