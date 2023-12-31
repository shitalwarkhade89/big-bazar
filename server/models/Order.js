import { Schema,model } from "mongoose";


const orderSchema =new Schema({
    user:{
        type:Schema.Types.ObjectId,
        
        ref:"User",

    },
    product:{
        type:Schema.Types.ObjectId,
      
        ref:"Product",
    },
    quantity:{
        type:Number,
        default:1,
  },
  deliveryCharges:{
    type:Number,
    default:0,
  },
  shippingAddress:{
    type:String,
    

  },
  status:{
    type:String,
    default:"pending",
  }

});

// model of order

const Order = model ("Order",orderSchema);

export default Order
