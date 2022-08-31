import mongoose from 'mongoose';

const messageModel = mongoose.Schema(
  {
    sender: { type: mongoose.Schema.Types.objectId, ref: 'User' },
    content: { type: String, trim: true },
    chat: { type: mongoose.Schema.Types.objectId, ref: 'Chat' },
  },
  { timestamps: true }
);

const message = mongoose.model('Message', messageModel);
export default message;
