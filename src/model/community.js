const mongoose = require('mongoose')

const userschema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    request:[{
    chat_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    name:{
        type:String,
        require:true,
        trim:true
    },
    status:{
        type:String,
        require:true
    }
    }],
    member:[{
        chat_id:{
            type:mongoose.Schema.Types.ObjectId,
            required:true
        },
        name:{
            type:String,
            required:true
        }
    }],
    message:[{
        filename:{
            type:String,
            trim:true
        },
        contentType:{
           type:String,
           trim:true
        },
          name:{
              type:String,
              trim:true,
              required:true
          },
          text:{
              type:String,
              trim:true,
              required:true
          },
          timestamp:{
              type:Number,
              required:true
          }
    }]

})

const community = mongoose.model('community',userschema)
module.exports= community