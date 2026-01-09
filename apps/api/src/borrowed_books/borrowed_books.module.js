"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowedBooksModule = void 0;
const common_1 = require("@nestjs/common");
const borrowed_books_controller_1 = require("./borrowed_books.controller");
const borrowed_books_service_1 = require("./borrowed_books.service");
const mongoose_1 = require("@nestjs/mongoose");
const borrowed_books_schema_1 = require("./schema/borrowed_books.schema");
const book_schema_1 = require("../books/schema/book.schema");
const token_service_1 = require("./token.service");
const jwt_1 = require("@nestjs/jwt");
let BorrowedBooksModule = class BorrowedBooksModule {
};
exports.BorrowedBooksModule = BorrowedBooksModule;
exports.BorrowedBooksModule = BorrowedBooksModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: borrowed_books_schema_1.BorrowedBooks.name, schema: borrowed_books_schema_1.BorrowedBooksSchema },
            ]),
            mongoose_1.MongooseModule.forFeature([{ name: book_schema_1.Book.name, schema: book_schema_1.BookSchema }]),
            jwt_1.JwtModule.register({ secret: process.env.JWT_SECRET }),
        ],
        controllers: [borrowed_books_controller_1.BorrowedBooksController],
        providers: [borrowed_books_service_1.BorrowedBooksService, token_service_1.TokenService],
    })
], BorrowedBooksModule);
//# sourceMappingURL=borrowed_books.module.js.map