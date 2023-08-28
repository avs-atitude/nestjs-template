import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findByEmail(email: string): Promise<User | undefined> {
    return this.usersRepository.findOne({
      where: {
        email,
      },
    });
  }

  async findOneUser(id: string): Promise<User | undefined> {
    return this.usersRepository.findOne({
      where: {
        id,
      },
    });
  }

  async findAllUsers(
    page = 1,
    limit = 10,
  ): Promise<{ users: User[]; total: number }> {
    const [users, total] = await this.usersRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
    });
    return { users, total };
  }

  async createUser(data: Partial<User>): Promise<User> {
    const user = this.usersRepository.create(data);
    return await this.usersRepository.save(user);
  }

  async updateUser(id: string, data: Partial<User>): Promise<User | undefined> {
    await this.usersRepository.update(id, data);
    return this.usersRepository.findOne({
      where: {
        id,
      },
    });
  }

  async deleteUser(id: string): Promise<boolean> {
    const deleteResult = await this.usersRepository.delete(id);
    return deleteResult.affected > 0;
  }
}
