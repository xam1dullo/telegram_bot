import { MyContext } from '../index';

export async function handleMessageEdit(ctx: MyContext) {
  const user = ctx.from!;
  const editedMessage = ctx.editedMessage!;

  // Foydalanuvchiga ogohlantirish yuborish
  await ctx.reply('Iltimos, xabarlarni tahrir qilmang.', {
    reply_to_message_id: editedMessage.message_id,
  });
}
