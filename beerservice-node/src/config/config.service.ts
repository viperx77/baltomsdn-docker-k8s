// src/config/config.service.ts
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

require('dotenv').config();

class ConfigService {

  constructor(private env: { [k: string]: string | undefined }) { }

  public getTypeOrmConfig(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.env['POSTGRES_HOST'] || '127.0.0.1',
      port: parseInt(this.env['POSTGRES_PORT'] || '5432'),
      username: this.env['POSTGRES_USER'] || 'postgres',
      password: this.env['POSTGRES_PASSWORD'] || 'mysecretpassword',
      database: this.env['POSTGRES_DATABASE'] || 'baltomsdn',
      entities: ['dist/**/*.entity{.ts,.js}'],
      "synchronize": true,
      migrationsTableName: 'migration',
      migrations: ['src/migration/*.ts'],
      cli: { migrationsDir: 'src/migration' },
      ssl: false,
    };
  }

}

const configService = new ConfigService(process.env);

export { configService };