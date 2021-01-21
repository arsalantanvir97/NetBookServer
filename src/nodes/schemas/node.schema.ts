import * as mongoose from 'mongoose';

export const NodeSchema = new mongoose.Schema({
  nodeid:String,
  id:String,
  type:String,
  tags:Array,
  attributes:Array
});
