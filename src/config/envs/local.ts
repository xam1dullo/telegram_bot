import { defineConfig } from '../defineConfig';

const env = process.env;
export function createLocalConfig() {
  return defineConfig({
    token: env.TOKEN as string,
    adminId: parseInt((env.ADMIN_ID as string) || '540152508', 10),
    mongoUrl: String(env.MONGO_URI),
    adminChatId: parseInt(process.env.ADMIN_CHAT_ID as string, 10),
  });
}
