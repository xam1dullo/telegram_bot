import { MyContext } from '../index';

export default async function savolCommand(ctx: MyContext) {
  await ctx.reply(
    `Savol rejimiga o'tdingiz, savolingizni yo'llashingiz mumkun. Savol yo'llash bo'yicha qo'llanma: https://nometa.xyz/uz.html`,
  );

  // {
  //   reply_markup: {
  //     keyboard: [[{ text: '📋 Menyu' }, { text: '⚙️ Sozlamalar' }]],
  //     resize_keyboard: true,
  //     one_time_keyboard: true,
  //   },
  // },

  // Sessionni yangilaymiz
  ctx.session.awaitingQuestion = true;
  ctx.session.anonymous = false;
}
