import { MiddlewareFn } from 'grammy';
import { MyContext } from '../index';

const loggerMiddleware: MiddlewareFn<MyContext> = async (ctx, next) => {
  console.log(`[@${ctx.from?.username}] ${ctx.message?.text}`);
  await next();
};

export default loggerMiddleware;
