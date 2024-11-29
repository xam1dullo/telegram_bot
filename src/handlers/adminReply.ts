import { config } from '../config';
import { MessageMap } from '../models/messageMap';
import { MyContext } from '../index';

export async function handleAdminReply(ctx: MyContext) {
  if (ctx.chat?.id !== config.adminChatId) return;

  if (ctx.message?.reply_to_message) {
    const adminMessageId = ctx.message.reply_to_message.message_id;

    const messageMap = await MessageMap.findOne({ adminMessageId });

    if (messageMap) {
      const userId = messageMap.userId;
      const userMessageId = messageMap.userMessageId;

      // Javob xabarini foydalanuvchiga yuboramiz
      // await ctx.api.copyMessage(userId, ctx?.chat?.id, ctx.message.message_id);
      await ctx.api.copyMessage(userId, ctx.chat.id, ctx.message.message_id, {
        reply_to_message_id: userMessageId, // Reply qilish
      });
    } else {
      await ctx.reply("Foydalanuvchi ID'sini topib bo'lmadi.");
    }
  }
}

// import { Context } from 'grammy';
// import { config } from '../config';
// import { MessageMap } from '../models/messageMap';

// export async function handleAdminReply(ctx: Context) {
//   // Faqat administratorning xabarlarini ko'rib chiqamiz
//   if (ctx.chat?.id !== config.adminChatId) return;

//   // Agar xabar reply bo'lsa
//   if (ctx.message?.reply_to_message) {
//     const originalMessage = ctx.message.reply_to_message;
//     const adminMessageId = ctx.message.reply_to_message.message_id;

//     console.log({
//       originalMessage,
//       adminMessageId,
//     });

//     const messageMap = await MessageMap.findOne({ adminMessageId });

//     console.log({ messageMap });

//     if (messageMap) {
//       const userId = messageMap.userId;
//       const replyText = ctx.message.text;

//       // Foydalanuvchiga javobni yuborish
//       await ctx.api.sendMessage(userId, replyText as string);
//     } else {
//       await ctx.reply("Foydalanuvchi ID'sini topib bo'lmadi.");
//     }
//     // Original xabardan foydalanuvchi ID'sini olish
//     const regex = /ID: (\d+)/;
//     const match = originalMessage.text?.match(regex);

//     if (match) {
//       const userId = parseInt(match[1], 10);
//       const replyText = ctx.message.text as string;

//       // Foydalanuvchiga javobni yuborish
//       await ctx.api.sendMessage(userId, replyText);
//     } else {
//       await ctx.reply("Foydalanuvchi ID'sini aniqlab bo'lmadi.");
//     }
//   }
// }
