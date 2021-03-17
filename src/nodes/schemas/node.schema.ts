import * as mongoose from 'mongoose';

export const NodeSchema = new mongoose.Schema({
  nodeid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Item'
  },
  id: {
    type: String,
    unique: true,
  }
  ,
  type: String,
  tags: Array,
  attributes: Array,
  color: String,
}, {
  timestamps: true,
});
