import mongoose from 'mongoose';
import { config } from './index';

// Ma'lumotlar bazasiga ulanish
mongoose
  .connect(config.mongoUrl)
  .then(() => console.log('MongoDB ga ulanish muvaffaqiyatli'))
  .catch((err) => console.error('MongoDB ga ulanishda xato:', err));
