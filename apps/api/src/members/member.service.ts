import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Member, MemberDocument } from './schema/member.schema';
import { CreateMemberDto } from './dto/create-member.dto';

@Injectable()
export class MembersService {
  constructor(
    @InjectModel(Member.name)
    private readonly memberModel: Model<MemberDocument>,
  ) {}

  async create(dto: CreateMemberDto) {
    const exists = await this.memberModel.findOne({ email: dto.email });

    if (exists) {
      throw new BadRequestException('Member already exists');
    }
    const phoneExists = await this.memberModel.findOne({ phone: dto.phone });
    if (phoneExists) {
      throw new BadRequestException('Member already exists');
    }

    return this.memberModel.create(dto);
  }

  async findAll() {
    return this.memberModel.aggregate([
      // 1️⃣ Join borrowedbooks by email
      {
        $lookup: {
          from: 'borrowedbooks',
          localField: 'email',
          foreignField: 'borrowerId',
          as: 'borrowedBooks',
        },
      },

      // 2️⃣ Lookup books using pipeline + ObjectId conversion
      {
        $lookup: {
          from: 'books',
          let: { bookIds: '$borrowedBooks.bookId' },
          pipeline: [
            {
              $match: {
                $expr: {
                  $in: [
                    '$_id',
                    {
                      $map: {
                        input: '$$bookIds',
                        as: 'id',
                        in: { $toObjectId: '$$id' },
                      },
                    },
                  ],
                },
              },
            },
            { $project: { title: 1 } },
          ],
          as: 'issuedBooks',
        },
      },

      // 3️⃣ Add count + titles
      {
        $addFields: {
          booksIssued: { $size: '$borrowedBooks' },
          issuedBookTitles: {
            $map: {
              input: '$issuedBooks',
              as: 'book',
              in: '$$book.title',
            },
          },
        },
      },

      // 4️⃣ Cleanup
      {
        $project: {
          password: 0,
          borrowedBooks: 0,
          issuedBooks: 0,
        },
      },
    ]);
  }
  async removeMember(id: string): Promise<{ message: string }> {
    const result = await this.memberModel.findByIdAndDelete(id);

    if (!result) {
      throw new NotFoundException('Member not found');
    }

    return { message: 'Member successfully deleted' };
  }
}
