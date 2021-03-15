import * as mongoose from 'mongoose';

export const NodeSchema = new mongoose.Schema({
  nodeid:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Item'
  },
  id:String,
  type:String,
  tags:Array,
  attributes:Array
}, {
  timestamps: true,
});
