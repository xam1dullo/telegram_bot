import mongoose, { Document, Schema } from 'mongoose';

interface IMessageMap extends Document {
  userId: number;
  userMessageId: number;
  adminMessageId: number;
}

const messageMapSchema = new Schema({
  userId: { type: Number, required: true },
  userMessageId: { type: Number, required: true },
  adminMessageId: { type: Number, required: true, unique: true },
});

export const MessageMap = mongoose.model<IMessageMap>(
  'MessageMap',
  messageMapSchema,
);
