import { Bot } from 'grammy';
import loggerMiddleware from './logger';
import errorHandlerMiddleware from './errorHandler';
import forwardToAdmin from './forwardToAdmin';
import { MyContext } from '../index';

export function setupMiddlewares(bot: Bot<MyContext>) {
  bot.use(loggerMiddleware);
  bot.use(forwardToAdmin);
  // bot.use(errorHandlerMiddleware);
  // boshqa middleware'larni ulash...
}
