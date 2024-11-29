import { MyContext } from '../index';
import { config } from '../config';

export async function handleUserMessage(ctx: MyContext) {
  if (ctx.session.awaitingQuestion) {
    const message = ctx.message!;
    const user = ctx.from!;

    // Sessionni yangilaymiz
    ctx.session.awaitingQuestion = false;

    let text = '';
    if (ctx.session.anonymous) {
      text = `<b>Yangi anonim savol:</b>\n\n${message.text}`;
    } else {
      text =
        `<b>Yangi savol:</b>\n` +
        `From: <a href="tg://user?id=${user.id}">${user.first_name}</a>\n` +
        `ID: ${user.id}\n\n` +
        `${message.text}`;
    }

    // Administratorga xabar yuboramiz
    const sentMessage = await ctx.api.sendMessage(config.adminChatId, text, {
      parse_mode: 'HTML',
    });

    // MessageMap ga saqlash (agar kerak bo'lsa)
    // Agar administratorning javobi foydalanuvchiga yetib borishini xohlasangiz
    // Bu qismni qo'shishingiz mumkin

    // await new MessageMap({
    //   userId: user.id,
    //   userMessageId: message.message_id,
    //   adminMessageId: sentMessage.message_id,
    // }).save();

    // Foydalanuvchiga tasdiqlash yuboramiz
    await ctx.reply('Savolingiz qabul qilindi. Tez orada javob beramiz.');
  } else {
    // Agar foydalanuvchi boshqa xabar yuborsa
    await ctx.reply(
      'Savol yuborish uchun /savol yoki /anonim_savol komandasini ishlating.',
    );
  }
}
