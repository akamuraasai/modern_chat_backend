import mongoose, { Schema } from 'mongoose';

const schema = Schema({
  to: { type: Schema.Types.ObjectId, ref: 'User' },
  from: { type: Schema.Types.ObjectId, ref: 'User' },
  message: { type: String, required: true },
  date: { type: String, required: true },
}, {
  timestamps: true,
});

export default mongoose.model('Message', schema);
