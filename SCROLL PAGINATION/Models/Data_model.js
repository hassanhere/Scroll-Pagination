const mongoose =require('mongoose')


const DataSchema=mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
        name:{
        type:String,
        required:true,
    },
    phone:{
        required:true,
        type:String,
    },
    date:{
        type:Date,
        default:Date.now
    }

})


module.exports=mongoose.model('data_model',DataSchema)