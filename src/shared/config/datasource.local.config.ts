import { ConfigModule } from "@nestjs/config";
import { DataSource, DataSourceOptions } from "typeorm";
import { SeederOptions } from "typeorm-extension";
import { MainLocalSeeder } from "../database/seeds-local/main.local.seeder";

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
  seeds: [MainLocalSeeder],
  synchronize: false,
}

export default new DataSource(options);