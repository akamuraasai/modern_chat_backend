import mongoose, { Schema } from 'mongoose';

const schema = Schema({
  name: { type: String, required: true },
}, {
  timestamps: true,
});

export default mongoose.model('User', schema);
