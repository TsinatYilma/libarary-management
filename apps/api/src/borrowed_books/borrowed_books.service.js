"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowedBooksService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const book_schema_1 = require("../books/schema/book.schema");
const borrowed_books_schema_1 = require("./schema/borrowed_books.schema");
let BorrowedBooksService = class BorrowedBooksService {
    bookModel;
    borrowedBookModel;
    constructor(bookModel, borrowedBookModel) {
        this.bookModel = bookModel;
        this.borrowedBookModel = borrowedBookModel;
    }
    async borrowBook(dto, borrowerId) {
        const book = await this.bookModel.findById(dto.bookId).exec();
        if (!book) {
            throw new common_1.NotFoundException('Book not found');
        }
        if (book.quantity < 1) {
            throw new common_1.BadRequestException('Book cannot be borrowed');
        }
        book.quantity -= 1;
        await book.save();
        const borrowedBook = new this.borrowedBookModel({
            borrowerId,
            bookId: dto.bookId,
            borrowedDate: new Date(),
        });
        await borrowedBook.save();
    }
    async getAllBorrowedBooks(borrowerId) {
        const borrowedBooks = await this.borrowedBookModel
            .find({ borrowerId })
            .exec();
        if (borrowedBooks.length === 0) {
            throw new common_1.NotFoundException('No borrowed books found for this user');
        }
        const borrowedBooksWithDetails = [];
        for (const borrowedBook of borrowedBooks) {
            const bookId = borrowedBook.bookId;
            const book = await this.bookModel.findById(bookId).exec();
            if (book) {
                borrowedBooksWithDetails.push({
                    bookId: borrowedBook.bookId,
                    borrowerId: borrowedBook.borrowerId,
                    borrowedDate: borrowedBook.borrowedDate,
                    title: book.title,
                    author: book.author,
                    publisher: book.publisher,
                    publicationYear: book.publicationYear,
                });
            }
        }
        return borrowedBooksWithDetails;
    }
    async returnBook(id) {
        const borrowedBook = await this.borrowedBookModel.findById(id).exec();
        if (!borrowedBook) {
            throw new common_1.NotFoundException('Borrowed book record not found');
        }
        const bookId = borrowedBook.bookId;
        const book = await this.bookModel.findById(bookId).exec();
        if (!book) {
            throw new common_1.NotFoundException('Book not found');
        }
        book.quantity += 1;
        await book.save();
        await this.borrowedBookModel.findByIdAndDelete(id).exec();
        return { message: 'Book returned successfully' };
    }
    async returnAllBooks(borrowerId) {
        const borrowedBooks = await this.borrowedBookModel
            .find({ borrowerId })
            .exec();
        if (borrowedBooks.length === 0) {
            throw new common_1.NotFoundException('No borrowed books found for this user');
        }
        for (const borrowedBook of borrowedBooks) {
            const bookId = borrowedBook.bookId;
            const book = await this.bookModel.findById(bookId).exec();
            if (book) {
                book.quantity += 1;
                await book.save();
            }
        }
        await this.borrowedBookModel.deleteMany({ borrowerId }).exec();
        return { message: 'All books returned successfully' };
    }
};
exports.BorrowedBooksService = BorrowedBooksService;
exports.BorrowedBooksService = BorrowedBooksService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(book_schema_1.Book.name)),
    __param(1, (0, mongoose_1.InjectModel)(borrowed_books_schema_1.BorrowedBooks.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], BorrowedBooksService);
//# sourceMappingURL=borrowed_books.service.js.map