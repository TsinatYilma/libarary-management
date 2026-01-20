import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MembersService } from './member.service';
import { MembersController } from './member.controller';
import { Member, MemberSchema } from './schema/member.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Member.name, schema: MemberSchema },
    ]),
  ],
  controllers: [MembersController],
  providers: [MembersService],
  exports: [MembersService],
})
export class MembersModule {}
