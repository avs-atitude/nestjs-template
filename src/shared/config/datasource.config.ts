import { ConfigModule, ConfigService } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';
import { MainSeeder } from '../database/seeds/main.seeder';

export function setupDataSource(config: ConfigService): DataSourceOptions {
  return {
      type: 'mysql',
      host: config.get('DB_HOST'),
      port: +config.get('DB_PORT'),
      username: config.get('DB_USER'),
      password: config.get('DB_PASS'),
      database: config.get('DB_NAME'),
      entities: ['dist/**/*.entity.js'],
  };
}

ConfigModule.forRoot();

const options: DataSourceOptions & SeederOptions = {
  migrationsTableName: 'migrations',
  name: 'default',
  type: 'mysql',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: ['dist/**/*.entity.js'],
  migrations: [`./dist/shared/database/migrations/*.{ts,js}`],
  seeds: [MainSeeder],
  synchronize: false,
}

export default new DataSource(options);
