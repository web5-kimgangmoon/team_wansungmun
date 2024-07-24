import { Schema, connect, model } from "mongoose";

interface IChat_log {
  sender_ID: number;
  receiver_ID: number;
  message: string;
  created_at: Date;
}

const schema = new Schema<IChat_log>({
  sender_ID: { type: Number },
  receiver_ID: { type: Number },
  message: { type: String, maxlength: 500, required: true },
  created_at: { type: Date, default: Date.now() },
});

const Chat_log = model<IChat_log>("Chat_log", schema);

export default Chat_log;
