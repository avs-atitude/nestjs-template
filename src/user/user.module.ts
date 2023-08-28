import { Module, forwardRef } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthModule } from 'src/auth/auth.module';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { User } from './user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [forwardRef(() => AuthModule), TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [
    //repositories
    UserRepository,

    //services
    UserService
  ],
  exports: [UserService]
})
export class UserModule {}