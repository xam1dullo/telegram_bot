import { Keyboard } from 'grammy';

export const mainMenu = new Keyboard()
  .text('📋 Menyu')
  .text('⚙️ Sozlamalar')
  .row()
  .text("ℹ️ Ma'lumot")
  .text('❓ Yordam');
