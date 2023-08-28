import { DataSource } from 'typeorm'
import { Seeder, SeederFactoryManager, runSeeder } from 'typeorm-extension'
import { MainSeeder } from '../seeds/main.seeder'
import UserSeeder from './user.seeder';

export class MainLocalSeeder implements Seeder {
	async run(
		dataSource: DataSource,
		_: SeederFactoryManager
	): Promise<void> {
		await runSeeder(dataSource, MainSeeder);
		await runSeeder(dataSource, UserSeeder);
	}
}

