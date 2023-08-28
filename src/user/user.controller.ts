import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Delete,
  ParseUUIDPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('Users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return this.userService.findOne(id);
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Delete(':id')
  delete(
    @Param('id', new ParseUUIDPipe({ version: '4' }))
    id: string,
  ) {
    return this.userService.delete(id);
  }
}
