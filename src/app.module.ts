import { Module, forwardRef } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { setupDataSource } from './shared/config/datasource.config';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => setupDataSource(configService),
      inject: [ConfigService]
    }),
    forwardRef(() => AuthModule), forwardRef(() => UserModule)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
