import { Bot } from 'grammy';
import { BotCommand } from 'grammy/types';
import startCommand from './start';
import helpCommand from './hepler';
import { MyContext } from '../index';
import savolCommand from './savol';
import anonimSavolCommand from './anonim';
import postCommand from './post';
// boshqa komandalar...

export const commands: BotCommand[] = [
  { command: 'start', description: 'Botni ishga tushirish' },
  { command: 'savol', description: `Savol rejimiga o'tish` },
  { command: 'anonim', description: `Anonim holatda savol yo'lash` },
  { command: 'post', description: `post` },
];

export function setupCommands(bot: Bot<MyContext>) {
  bot.command('start', startCommand);
  bot.command('savol', savolCommand);
  bot.command('anonim', anonimSavolCommand);
  bot.command('post', postCommand);
}
