import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail, MinLength, IsBoolean, MaxLength } from 'class-validator';
import { faker } from 'src/shared/config/faker.config';

export class CreateUserDto {
  @ApiProperty({
    example: faker.person.fullName(),
  })
  @IsNotEmpty()
  @MaxLength(100)
  name: string;

  @ApiProperty({
    example: faker.internet.email().toLowerCase(),
  })
  @IsNotEmpty()
  @IsEmail()
  @MaxLength(100)
  email: string;

  @ApiProperty({
    example: faker.internet.password().toLowerCase(),
  })
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(30)
  password: string;

  @IsNotEmpty()
  @IsBoolean()
  status: boolean;
}
