import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import User from './models/User.js';
import Product from './models/Product.js';


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


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server running on port :${PORT}`)
    connectDB();

});