import { MyContext } from '../index';

export default async function anonimSavolCommand(ctx: MyContext) {
  // Foydalanuvchiga savolini yozishni so'raymiz
  await ctx.reply(
    `Anonim savol rejimiga o'tdingiz, savolingizni yo'llashingiz mumkun. Iltimos, savolingizni bitta xabarda yo'llang.`,
  );

  // Sessionni yangilaymiz
  ctx.session.awaitingQuestion = true;
  ctx.session.anonymous = true;
}
