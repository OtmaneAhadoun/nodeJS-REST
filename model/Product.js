const mongoose=require('mongoose')
const ProductSchema=mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    quantity:{
        type:Number,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    url_photo:{
        type:String,
        require:true
    }
})
const Product=mongoose.model('Product',ProductSchema)
module.exports=Product