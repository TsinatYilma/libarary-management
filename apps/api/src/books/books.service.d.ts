import { BookDetailsUpdateDto } from './dto/quantity.dto';
import { BookDto } from './dto/book.dto';
import { Book, BookDocument } from './schema/book.schema';
import { Model } from 'mongoose';
export declare class BooksService {
    private bookModel;
    constructor(bookModel: Model<BookDocument>);
    addBook(dto: BookDto): Promise<Book>;
    getAllBooks(): Promise<Book[]>;
    updateQuantity(id: string, dto: BookDetailsUpdateDto): Promise<Book>;
    removeBook(id: string): Promise<{
        message: string;
    }>;
}
export declare class BookService {
}
