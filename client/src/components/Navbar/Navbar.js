import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
    const [user, setUser] =useState({});

    useEffect(()=>{
        const storageUser =JSON.parse(localStorage.getItem("user") || '{}');
        setUser(storageUser);
    },[])
    return (
        <>
            <div className="navbar">
                <Link to="/" className="navbar-logo">Big-Bazar 🛒</Link>
                <div className="navbar-links-cont">
                    <Link to="/login" className="navbar-links">Login</Link>
                    <Link to="/signup" className="navbar-links">Signup</Link>
                    <Link to="orders" className="navbar-links">My Orders</Link>
                    
                </div>

                <div  className="user">Hello, {user.name ||"User"}

                {
                   user.name ? (<span className="logout-btn" onClick={() => {
                    localStorage.removeItem("user");
                    window.location.href ="/login" ;
                 }} >
                     Logout
                     </span>)
                     :
                     null
                }
                </div>
            </div>
        </>
    )
}
export default Navbar