import * as mongoose from 'mongoose';

export const ItemSchema = new mongoose.Schema({
  name:String,
  email:String,
  imageUrl:String,
  access_token:String,
  expires_in:Number,
  expires_at:Number,
});
