import React, { useEffect, useState } from "react";
import "./BuyPage.css";
import Navbar from "../../components/Navbar/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";

function BuyPage() {
    const { id } = useParams()
    const [product, setProduct] = useState({});
    const [quantity,setQuantity] =useState(1);
    const [shippingAddress ,setShippingAddress] = useState('');
    const loadproduct = async () => {

        if (!id) {
            return;
        }

        const response = await axios.get(`/product/${id}`);

        setProduct(response?.data?.data);
    };

    const increseOuantity =() => {
        setQuantity(quantity+1);
    }
    const decreseOuantity =() => {
        if (quantity=== 1){
            return;
        }
        setQuantity(quantity-1);
    }
    const placeOrder =async () => {
        const currentUser = JSON.parse(localStorage.getItem('user') || '{}');
        const orderDetails = {
            user:currentUser._id,
            product: id,
            quantity:quantity,
            shippingAddress:shippingAddress

        }
        const response =await axios.post('/order',orderDetails);

        alert(response?.data?.message);
        if(response?.data?.message){
            window.location.href ='/orders'
        }

    }


    useEffect(() => {
        loadproduct();
    }, [])

    return (
        <>
            <Navbar />
            <div className="buy-product-conatiner">
                <div className="buy-roduct-info">
                    <img src={product.image} alt={product.name} className="buy-product-img" />
                    <div>
                        <h1>{product.name}</h1>
                        <p>{product.description}</p>
                        <div>
                       <span className="btn-decrese-quantity" onClick={decreseOuantity}>➖</span>
                        <span className="product-quantity">{quantity}</span>
                        <span className="btn-increse-quantity" onClick={increseOuantity}>➕</span>
                    </div>
                    <input type="text" placeholder="Enter shipping address" className="input-boxes input-shipping-address"
                    value={shippingAddress}
                    onChange={(e) => setShippingAddress(e.target.value)}
                    />
                    </div>
                   
                    
                </div>
                <button type="button" className="btn btn-place-order" onClick={placeOrder}>Place Order</button>
                
            </div>
        </>
    )
}
export default BuyPage