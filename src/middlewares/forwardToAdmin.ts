import { MiddlewareFn } from 'grammy';
import { config } from '../config';
import { MessageMap } from '../models/messageMap';
import { MyContext } from '../index';

const forwardToAdmin: MiddlewareFn<MyContext> = async (ctx, next) => {
  if (ctx.message) {
    const user = ctx.from!;
    const message = ctx.message;

    if (
      message.reply_to_message &&
      message.reply_to_message.from?.id === ctx.me.id
    ) {
      // Bu xabar botdan kelgan xabarga javob, shuning uchun administratorga yubormaymiz
      await next();
      return;
    }

    // Xabarni administratorga forward qilish
    const sentMessage = await ctx.api.forwardMessage(
      config.adminChatId,
      ctx?.chat?.id as number,
      message.message_id,
    );

    // Ma'lumotlar bazasida saqlaymiz
    const messageMap = new MessageMap({
      userId: user.id,
      userMessageId: message.message_id,
      adminMessageId: sentMessage.message_id,
    });

    await messageMap.save();
  }

  await next();
};

export default forwardToAdmin;

// import { MiddlewareFn } from 'grammy';
// import { Context } from 'grammy';
// import { config } from '../config';
// import { MessageMap } from '../models/messageMap';

// const forwardToAdmin: MiddlewareFn<Context> = async (ctx, next) => {
//   if (ctx.message) {
//     const user = ctx.from!;
//     const message = ctx.message;

//     // Xabar matni yoki turiga qarab harakat qilish
//     if (message.text) {
//       // Xabarni administratorga yuborish
//       await ctx.api.sendMessage(
//         config.adminChatId,
//         `<b>Yangi xabar:</b>\n` +
//           `From: <a href="tg://user?id=${user.id}">${user.first_name}</a>\n` +
//           `ID: ${user.id}\n\n` +
//           `${message.text}`,
//         {
//           parse_mode: 'HTML',
//           reply_markup: {
//             inline_keyboard: [
//               [
//                 {
//                   text: 'Javob yozish',
//                   callback_data: `reply_to_${user.id}`,
//                 },
//               ],
//             ],
//           },
//         },
//       );

//       console.log({
//         message,
//         user_id: user.id,
//       });
//     } else {
//       // Boshqa turdagi xabarlarni ham ko'rib chiqish (rasm, video, va h.k.)
//       const sentMessage = await ctx.api.forwardMessage(
//         config.adminChatId,
//         ctx?.chat?.id as number,
//         message.message_id,
//       );

//       const messageMap = new MessageMap({
//         userId: user.id,
//         adminMessageId: sentMessage.message_id,
//       });

//       console.log({
//         messageMap,
//       });

//       await messageMap.save();
//     }
//   }

//   await next();
// };

// export default forwardToAdmin;
