import { BotError } from 'grammy';
import { MyContext } from '../index';

const errorHandlerMiddleware = (error: BotError<MyContext>) => {
  console.error('Botda xato yuz berdi:', error);
};

export default errorHandlerMiddleware;
