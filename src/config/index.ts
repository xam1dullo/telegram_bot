import { createLocalConfig } from './envs/local';
import { config as envConfig } from 'dotenv';

envConfig();

export const config = getConfig();

function getConfig() {
  switch (process.env.APP_ENV) {
    case 'development':
      return createLocalConfig();
    default:
      throw new Error(`Invalid APP_ENV "${process.env.APP_ENV}"`);
  }
}
