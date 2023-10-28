import express from 'express';
import mongoose, { Schema } from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import User from './models/User.js';
import Product from './models/Product.js';
import Order from './models/Order.js';

const app = express();
app.use(express.json());

//  mongodb connection
const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    if (conn) {
        console.log(`MongoDb Connected Succesfully`);
    }
};

//  post /Singup

app.post("/singup", async (req, res) => {
    const {
        name,
        email,
        password,
        mobile,
        address,
        gender
    } = req.body;

    const user = new User({
        name: name,
        email: email,
        password: password,
        mobile: mobile,
        address: address,
        gender: gender

    });
    try {

        const savedUser = await user.save();
        res.json({
            success: true,
            data: savedUser,
            message: "signup successful"

        })

    }
    catch (e) {
        res.json({
            success: false,
            message: e.message
        })
    }

});

// post /login

app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.json({
            success: false,
            message: "please provide email and password"
        })
    }

    const user = await User.findOne({
        email: email,
        password: password
    }).select("name email mobile ")
    if (user) {
        return res.json({
            success: true,
            data: user,
            message: "Login successfull"
        });
    }
    else {
        return res.json({
            success: true,
            message: "Invalid credentials"
        });
    }


});

//  create product /post

app.post('/product', async (req, res) => {

    const { name, description, image, brand, price } = req.body;
    const newProduct = new Product({
        name: name,
        description: description,
        image: image,
        brand: brand,
        price: price

    })
    try {
        const saveProduct = await newProduct.save();

        res.json({
            message: 'create product successfully',
            data: saveProduct
        }
        )
    }
    catch (e) {
        res.json({
            success: false,
            message: e.message
        })

    }

});
// get all products /get

app.get('/products', async (req, res) => {
    const findProduct = await Product.find()
    res.json({
        success: true,
        data: findProduct,
        message: "get all product successfully"
    })
});

// get spesific product by id

app.get('/product/:_id', async (req, res) => {

    const { _id } = req.params;
    const findproductdetail = await Product.findOne({ _id: _id });

    res.json({
        success: true,
        data: findproductdetail,
        message: "get product successfully"
    })

});

// delete product /delete

app.delete('/product/:_id', async (req, res) => {
    const { _id } = req.params;
    const deleteProduct = await Product.deleteOne({ _id: _id })
    res.json({
        success: true,
        data: deleteProduct,
        message: "delete product successfully"
    })

});
// search products

app.get('/serchProduct', async (req, res) => {
    const { q } = req.query;
    const searchProduct = await Product.find({ name: { $regex: q, $options: 'i' } })

    res.json({
        success: true,
        data: searchProduct,
        message: "search product successfully"
    })
});

// Post /order
app.post('/order', async (req, res) => {
    const { user, product, deliveryCharges, shippingAddress, status, quantity } = req.body;

    const newOrder = new Order({
        user: user,
        product: product,
        deliveryCharges: deliveryCharges,
        shippingAddress: shippingAddress,
        status: status,
        quantity: quantity,
    });

    try {
        const saveOrder = await newOrder.save();
        res.json({
            success: true,
            data: saveOrder,
            message: "order created  successfully"
        })
    }
    catch (e) {
        res.json({
            success: false,
            message: e.message
        });
    }
});

// get /oredr/:id

app.get('/order/:id', async (req, res) => {
    const { id } = req.params;

    const findOrder = await Order.findById(id).populate("user product");

    // clean sensitive details
    //   password gender address
    findOrder.user.password = undefined;
    findOrder.user.gender = undefined;
    findOrder.user.address = undefined;
    res.json({
        success: true,
        data: findOrder,
        message: "order fetched successfully"
    })
});

// get/orders

app.get('/ordres', async (req, res) => {
    const allOrders = await Order.find().populate("user product");
    allOrders.forEach(order => {
        order.user.password = undefined;

    });
    res.json({
        success: true,
        data: allOrders,
        message: "Allorders fetched successfully"

    });
});

// GET /orders/user/:id

app.get('/orders/user/:id', async (req, res) => {
    const { id } = req.params;

    const userOrders = await Order.find({ user: id }).populate("user product");

    res.json({
        success: true,
        data: userOrders,
        message: "user's order fetched successfully"
    });
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server running on port :${PORT}`)
    connectDB();

});