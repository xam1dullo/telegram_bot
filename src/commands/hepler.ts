import { Context } from 'grammy';

export default async function helper(ctx: Context) {
  await ctx.reply('Salom! Botga xush kelibsiz.', {
    reply_markup: {
      keyboard: [[{ text: '📋 Menyu' }, { text: '⚙️ Sozlamalar' }]],
      resize_keyboard: true,
    },
  });
}
