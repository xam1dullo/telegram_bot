import { Context } from 'grammy';

export default async function startCommand(ctx: Context) {
  await ctx.reply(
    `Assalomu alaykum!. Istalgan savolingizni /savol yoki /anonim buyrug'i orqali yo'llashingiz mumkun. Iltimos, savolingizni bitta xabarda yo'llang.`,
    {
      reply_markup: {
        keyboard: [[{ text: '📋 Menyu' }, { text: '⚙️ Sozlamalar' }]],
        resize_keyboard: true,
        one_time_keyboard: true,
      },
    },
  );
}
