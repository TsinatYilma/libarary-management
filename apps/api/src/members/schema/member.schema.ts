import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MemberDocument = HydratedDocument<Member>;

@Schema({ timestamps: true })
export class Member {
  @Prop({ required: true, trim: true })
  fullName!: string;

  @Prop({ required: true, unique: true, lowercase: true })
  email!: string;

  @Prop({ required: true })
  phone!: string;

  @Prop({
    required: true,
    enum: ['student', 'faculty', 'staff'],
  })
  role!: 'student' | 'faculty' | 'staff';

  @Prop({
    enum: ['active', 'inactive'],
    default: 'active',
  })
  status!: 'active' | 'inactive';
}

export const MemberSchema = SchemaFactory.createForClass(Member);
