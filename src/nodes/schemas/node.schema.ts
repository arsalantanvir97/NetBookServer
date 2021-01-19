import * as mongoose from 'mongoose';

export const NodeSchema = new mongoose.Schema({
  id:String,
  type:String,
  tags:Array,
  attributes:Array
});
