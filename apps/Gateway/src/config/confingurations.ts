import { registerAs } from '@nestjs/config';

const AppConfig = registerAs('APP', () => ({
  port: 3000,
}));

export const confingurations = [AppConfig];
