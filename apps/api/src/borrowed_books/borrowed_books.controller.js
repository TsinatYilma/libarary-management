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
exports.BorrowedBooksController = void 0;
const common_1 = require("@nestjs/common");
const borrowed_books_service_1 = require("./borrowed_books.service");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
const role_enum_1 = require("../auth/roles/role.enum");
const borrowed_books_dto_1 = require("./dto/borrowed_books.dto");
const token_service_1 = require("./token.service");
const public_decorators_1 = require("../auth/decorators/public.decorators");
let BorrowedBooksController = class BorrowedBooksController {
    borrowedBooksService;
    tokenService;
    constructor(borrowedBooksService, tokenService) {
        this.borrowedBooksService = borrowedBooksService;
        this.tokenService = tokenService;
    }
    async borrowBook(authHeader, dto) {
        const token = authHeader.replace('Bearer ', '');
        const userId = this.tokenService.extractEmail(token);
        this.borrowedBooksService.borrowBook(dto, userId);
    }
    async getAllBorrowedBooks(authHeader) {
        const token = authHeader.replace('Bearer ', '');
        const userId = this.tokenService.extractEmail(token);
        return this.borrowedBooksService.getAllBorrowedBooks(userId);
    }
    async returnBook(id) {
        this.borrowedBooksService.returnBook(id);
    }
    returnAllBooks(authHeader) {
        const token = authHeader.replace('Bearer ', '');
        const userId = this.tokenService.extractEmail(token);
        this.borrowedBooksService.returnAllBooks(userId);
    }
};
exports.BorrowedBooksController = BorrowedBooksController;
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.USER),
    __param(0, (0, common_1.Headers)('authorization')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, borrowed_books_dto_1.BorrowedBooksDto]),
    __metadata("design:returntype", Promise)
], BorrowedBooksController.prototype, "borrowBook", null);
__decorate([
    (0, roles_decorator_1.Roles)(role_enum_1.Role.USER),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Headers)('authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BorrowedBooksController.prototype, "getAllBorrowedBooks", null);
__decorate([
    (0, roles_decorator_1.Roles)(role_enum_1.Role.USER),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BorrowedBooksController.prototype, "returnBook", null);
__decorate([
    (0, common_1.Delete)(),
    (0, public_decorators_1.PublicRoute)(),
    __param(0, (0, common_1.Headers)('authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BorrowedBooksController.prototype, "returnAllBooks", null);
exports.BorrowedBooksController = BorrowedBooksController = __decorate([
    (0, common_1.Controller)('books/borrowed'),
    __metadata("design:paramtypes", [borrowed_books_service_1.BorrowedBooksService,
        token_service_1.TokenService])
], BorrowedBooksController);
//# sourceMappingURL=borrowed_books.controller.js.map