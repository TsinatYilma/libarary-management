import { Injectable, BadRequestException } from '@nestjs/common';
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

    return this.memberModel.create(dto);
  }

  async findAll() {
    return this.memberModel.find().lean();
  }
}
