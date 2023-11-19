import React,{useEffect, useState} from "react";
import "./MyOrders.css";
import Navbar from "../../components/Navbar/Navbar";

function MyOrders(){
    const[user,setUser] =useState({});

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

        <h1>My Orders </h1>
        </>
    )
}

export default MyOrders