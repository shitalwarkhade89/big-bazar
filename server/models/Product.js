import { Schema,model } from "mongoose";

const productSchema =new Schema ({
    name :{
       type:String ,
       required:true
    },
    price :{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    brand:{
        type:String,
    },
    image:{
        type:String,   
        required:true
    }

});

// model

const Product =model ("Product",productSchema);
export default Product