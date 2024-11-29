import { Bot, Context, session, SessionFlavor } from 'grammy';
import { config } from './config';
import { commands, setupCommands } from './commands';
import { setupMiddlewares } from './middlewares';
import { handleAdminReply } from './handlers/adminReply';
import './config/db';
import { handleMessageEdit } from './handlers/messageEditWarning';
import { handleUserMessage } from './handlers/handleUserMessage';

interface SessionData {
  awaitingQuestion: boolean;
  anonymous: boolean;
}

export type MyContext = Context & SessionFlavor<SessionData>;

// Botni yaratamiz
const bot = new Bot<MyContext>(config.token);

bot.api.setMyCommands(commands);

// Sessionni ulaymiz
function initial(): SessionData {
  return {
    anonymous: false,
    awaitingQuestion: false,
  };
}

bot.use(session({ initial }));

// Middlewares ni sozlash
setupMiddlewares(bot);

// Komandalarni sozlash
setupCommands(bot);

bot.on('message:text', handleUserMessage);

bot.on('message:text', handleAdminReply);
// Botni ishga tushirish
bot.on('edited_message', handleMessageEdit);

bot.on('message', async (ctx) => {
  await ctx.reply('Kechirasiz, bu komandani tushunmadim. /help ni tekshiring.');
});
bot.start();
