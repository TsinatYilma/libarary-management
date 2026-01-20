import { Controller, Post, Body, Get } from '@nestjs/common';
import { MembersService } from './member.service';
import { CreateMemberDto } from './dto/create-member.dto';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from '../auth/roles/role.enum';

@Roles(Role.LIBRARY_ADMIN)
@Controller('members')
export class MembersController {
  constructor(private readonly membersService: MembersService) {}

  @Post()
  create(@Body() dto: CreateMemberDto) {
    return this.membersService.create(dto);
  }

  @Get()
  findAll() {
    return this.membersService.findAll();
  }
}
