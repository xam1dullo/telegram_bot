import { Conversation, ConversationFlavor } from '@grammyjs/conversations';
import { Context, Composer } from 'grammy';

type MyContext = Context & ConversationFlavor;

export const registrationScene = new Composer<MyContext>();

// registrationScene.on(':text', async (ctx) => {
//   await ctx.reply('Ismingiz nima?');
//   const { message } = await ctx.conversation.wait();
//   const name = message.text;
//   await ctx.reply(`Sizning ismingiz: ${name}`);
// });
