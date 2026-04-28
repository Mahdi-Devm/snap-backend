import { registerAs } from '@nestjs/config';

const DatabaseConfig = registerAs('Database', () => ({
  database: 'snappdb',
  username: 'snap',
  password: 'snap_pass',
  host: 'localhost',
  port: 5432,
  dialect: 'postgres',
}));
const RedisConfig = registerAs('Redis', () => ({
  host: '127.0.0.1',
  port: 6379,
  cacheDb: 10,
  sessionDb: 11,
}));

export const confingurations = [DatabaseConfig, RedisConfig];
