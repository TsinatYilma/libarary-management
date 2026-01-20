import { Controller, Post, Body, Get, Delete, Param } from '@nestjs/common';
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

  @Get('all')
  findAll() {
    return this.membersService.findAll();
  }
  @Delete(':id')
  async removeBook(@Param('id') id: string): Promise<{ message: string }> {
    return this.membersService.removeMember(id);
  }
}
