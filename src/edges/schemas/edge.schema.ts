import * as mongoose from 'mongoose';

export const EdgeSchema = new mongoose.Schema({
    edgeid:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'Item'
    },
  source:{type:mongoose.Schema.Types.ObjectId,
  ref:'Node'
},
  target:{type:mongoose.Schema.Types.ObjectId,
    ref:'Node'
  },
  tags:Array,
 
});
