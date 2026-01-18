import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BookDocument = HydratedDocument<Book>;

export enum BookStatus {
  AVAILABLE = 'available',
  UNAVAILABLE = 'unavailable',
}

@Schema({ timestamps: true })
export class Book {
  @Prop({ required: true, trim: true })
  title!: string;

  @Prop({
    required: true,
    min: 1000,
    max: new Date().getFullYear(),
  })
  publicationYear!: number;

  @Prop({ required: true, trim: true })
  author!: string;

  @Prop({ required: true, trim: true })
  publisher!: string;

  @Prop({ required: true, min: 0, default: 0 })
  quantity!: number;

  @Prop({
    enum: BookStatus,
    default: BookStatus.AVAILABLE,
  })
  status!: BookStatus;
}

export const BookSchema = SchemaFactory.createForClass(Book);
