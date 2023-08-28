import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRepository } from './user.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async findByEmail(email: string): Promise<User | undefined> {
    return this.userRepository.findByEmail(email);
  }

  async findAll(): Promise<{ users: User[]; total: number }> {
    return await this.userRepository.findAllUsers();
  }

  async findOne(id: string): Promise<User> {
    const user = await this.userRepository.findOneUser(id);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { email } = createUserDto;

    const userExists = await this.userRepository.findByEmail(email);

    if (userExists) {
      throw new ConflictException('User with this email already exists');
    }

    return this.userRepository.createUser({
      ...createUserDto,
      password: bcrypt.hashSync(createUserDto.password, 10),
    });
  }

  async delete(id: string): Promise<boolean> {
    const user = await this.findOne(id);

    return this.userRepository.deleteUser(user.id);
  }
}
