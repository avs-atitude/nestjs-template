import { DataSource } from 'typeorm'
import { Seeder, SeederFactoryManager } from 'typeorm-extension'

export class MainSeeder implements Seeder {
	async run(
		_dataSource: DataSource,
		_: SeederFactoryManager
	): Promise<void> {}
}

