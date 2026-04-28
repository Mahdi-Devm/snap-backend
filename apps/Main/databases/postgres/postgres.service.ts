import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class PostgresService implements OnModuleInit {
  public connection: Sequelize;
  private logger = new Logger(PostgresService.name);

  constructor(private readonly configService: ConfigService) {}
  async onModuleInit() {
    try {
      console.log('trying to connect db 🌱');
      const dbConfig = this.configService.get('Database');

      this.connection = new Sequelize({
        dialect: dbConfig.dialect,
        host: dbConfig.host,
        port: dbConfig.port,
        username: dbConfig.username,
        password: dbConfig.password,
        database: dbConfig.database,
        logging: false,
      });

      await this.connection.authenticate();
      this.logger.log('Postgres database is connected!');
    } catch (e) {
      this.logger.error('Falied to connect to Postgres', e);
    }
  }
}
