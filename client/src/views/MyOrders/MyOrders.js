import React,{useEffect, useState} from "react";
import "./MyOrders.css";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";

const STATUS_BADGE_COLOR_MAP ={
  "pending":"badge-danger",
"shiped":"badge-warning",
"delivered":"badge-success",
}

function MyOrders(){
    const [user,setUser] =useState({});
    const [orders, setOrders]= useState([]);

    const loadOrders = async () => {

        const userstorage = JSON.parse(localStorage.getItem('user') || '{}')
        const userId = userstorage._id;
        if(!userId){
        return;  
        }

        const response = await axios.get(`/orders/user/${userId}`);
        setOrders(response?.data?.data);

    }
    useEffect(() => {
        loadOrders();
    }
    ,[user])

    useEffect(() =>{
        const storageUser =JSON.parse (localStorage.getItem("user")||'{}');
        if (storageUser?.email){
            setUser(storageUser);
        }
        else{
            alert("you are not loged in !");
            window.location.href ="/login";
        }
       setUser(storageUser);
    },[])


    return(
        <>
        <Navbar/>

        <h1 className="text-center">My Orders </h1>

        <div>
            {
             orders?.map((order,index) => {
                const{product,quantity,status,deliveryCharges} =order
                return(
                    <>
                    <div className="order-card">
                        <Link to={`/buypage/${product._id}`} className="my-product-name">{product.name}</Link>
                        <h4>₹ {product.price} x {quantity} = ₹{product.price * quantity}</h4>
                        <h4>{deliveryCharges}</h4>
                        <span className={`order-status ${STATUS_BADGE_COLOR_MAP[status]}`}>{status}</span>
                    </div>
                    </>
                )
             })
            }
        </div>
        </>
    )
}

export default MyOrders