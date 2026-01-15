import { HydratedDocument } from 'mongoose';
export type BookDocument = HydratedDocument<Book>;
export declare class Book {
  title: string;
  publicationYear: number;
  author: string;
  publisher: string;
  quantity: number;
}
export declare const BookSchema: import('mongoose').Schema<
  Book,
  import('mongoose').Model<
    Book,
    any,
    any,
    any,
    import('mongoose').Document<unknown, any, Book, any, {}> &
      Book & {
        _id: import('mongoose').Types.ObjectId;
      } & {
        __v: number;
      },
    any
  >,
  {},
  {},
  {},
  {},
  import('mongoose').DefaultSchemaOptions,
  Book,
  import('mongoose').Document<
    unknown,
    {},
    import('mongoose').FlatRecord<Book>,
    {},
    import('mongoose').ResolveSchemaOptions<
      import('mongoose').DefaultSchemaOptions
    >
  > &
    import('mongoose').FlatRecord<Book> & {
      _id: import('mongoose').Types.ObjectId;
    } & {
      __v: number;
    }
>;
