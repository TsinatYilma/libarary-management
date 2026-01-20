import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { signupDTO, LoginDto } from './dto/auth.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schema/user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private jwtService: JwtService,
  ) {}

  getToken(userEmail: string, userRole: string): string {
    return this.jwtService.sign({
      email: userEmail,
      role: userRole,
    });
  }

  async signup(dto: signupDTO): Promise<{ token: string }> {
    const { fullName, email, password, role } = dto;
    var usedBefore = await this.userModel.findOne({ email });

    if (usedBefore) {
      throw new BadRequestException('Duplicate email.');
    }
    if (role === 'admin') {
      const adminExists = await this.userModel.findOne({ role: 'admin' });
      if (adminExists) {
        throw new BadRequestException('Admin already exists.');
      }
    }

    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await this.userModel.create({
        fullName,
        email,
        password: hashedPassword,
        role,
      });
      return { token: this.getToken(email, role) };
    } catch (error) {
      console.log(error);
      return { token: `not working: ${error}` };
    }
  }
  async login(dto: LoginDto): Promise<{ token: string }> {
    const { email, password, role } = dto;

    const user = await this.userModel.findOne({ email });

    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password);

    if (!isPasswordMatched) {
      throw new UnauthorizedException('Invalid email or password');
    }

    if (user.role != role) {
      throw new UnauthorizedException(
        'Wrong Role. Role not matched correctly.',
      );
    }

    const token = this.getToken(email, role);
    return { token: token };
  }
  async getAllUsers() {
    return this.userModel
      .find()
      .select('-password') // never expose passwords
      .exec();
  }

  async count(): Promise<number> {
    return this.userModel.countDocuments();
  }
  async getUsersWithBorrowedCount() {
    return this.userModel.aggregate([
      // Join borrowedbooks using email
      {
        $lookup: {
          from: 'borrowedbooks',
          localField: 'email',
          foreignField: 'borrowerId',
          as: 'borrowedBooks',
        },
      },

      // Count only NOT returned books
      {
        $addFields: {
          booksIssued: {
            $size: '$borrowedBooks', // no returned field in your data
          },
        },
      },

      // Remove sensitive or unnecessary fields
      {
        $project: {
          password: 0,
          borrowedBooks: 0,
        },
      },
    ]);
  }
}
