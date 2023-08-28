import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { faker } from '@faker-js/faker';
import { User } from '@/user/user.entity';
import * as bcrypt from 'bcrypt';

export default class UserSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    _: SeederFactoryManager,
  ): Promise<void> {
    const userRepository = dataSource.getRepository(User);
    const users = Array(10)
      .fill(0)
      .map(() => this.generateUsers());

    await userRepository.upsert(users, ['email']);
  }

  private generateUsers(): User {
    const user = new User();

    user.name = faker.person.fullName();
    user.email = faker.internet.email();
    user.password = bcrypt.hashSync('123456', 10);

    return user;
  }
}
