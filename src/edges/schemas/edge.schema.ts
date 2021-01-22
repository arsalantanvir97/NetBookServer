import * as mongoose from 'mongoose';

export const EdgeSchema = new mongoose.Schema({
    edgeid:String,
  source:String,
  target:String,
  
  tags:Array,
 
});
