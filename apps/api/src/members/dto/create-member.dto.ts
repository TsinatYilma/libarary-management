import { IsEmail, IsEnum, IsNotEmpty } from 'class-validator';

export class CreateMemberDto {
  @IsNotEmpty()
  fullName!: string;

  @IsEmail()
  email!: string;

  @IsNotEmpty()
  phone!: string;

  @IsEnum(['student', 'faculty', 'staff'])
  role!: 'student' | 'faculty' | 'staff';
}
