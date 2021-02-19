import * as mongoose from 'mongoose';

export const PackageSchema = new mongoose.Schema({
  type:String,
  price:Number,
  Nodes:Number,
  Edges:Number,
  AIQueries:Number,
  
});
