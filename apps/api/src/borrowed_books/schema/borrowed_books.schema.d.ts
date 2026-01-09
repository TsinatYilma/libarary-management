import { HydratedDocument } from 'mongoose';
export type BorrowedBooksDocument = HydratedDocument<BorrowedBooks>;
export declare class BorrowedBooks {
    borrowerId: string;
    bookId: string;
    borrowedDate: Date;
}
export declare const BorrowedBooksSchema: import("mongoose").Schema<BorrowedBooks, import("mongoose").Model<BorrowedBooks, any, any, any, import("mongoose").Document<unknown, any, BorrowedBooks, any, {}> & BorrowedBooks & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, BorrowedBooks, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<BorrowedBooks>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<BorrowedBooks> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
