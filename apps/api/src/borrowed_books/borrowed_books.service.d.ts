import { Model } from 'mongoose';
import { BookDocument } from '../books/schema/book.schema';
import { BorrowedBooksDocument } from './schema/borrowed_books.schema';
import { BorrowedBooksDto } from './dto/borrowed_books.dto';
export declare class BorrowedBooksService {
    private bookModel;
    private borrowedBookModel;
    constructor(bookModel: Model<BookDocument>, borrowedBookModel: Model<BorrowedBooksDocument>);
    borrowBook(dto: BorrowedBooksDto, borrowerId: string): Promise<void>;
    getAllBorrowedBooks(borrowerId: string): Promise<object>;
    returnBook(id: string): Promise<{
        message: string;
    }>;
    returnAllBooks(borrowerId: string): Promise<{
        message: string;
    }>;
}
