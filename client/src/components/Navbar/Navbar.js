import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {


    return (
        <>
            <div className="navbar">
                <Link to="/" className="navbar-logo">Big-Bazar 🛒</Link>
                <div>
                    <Link to="/login" className="navbar-links">Login</Link>
                    <Link to="/signup" className="navbar-links">Signup</Link>
                    <Link to="orders" className="navbar-links">My Orders</Link>
                </div>

                <span  className="navbar-links">Hello ,User</span>
            </div>
        </>
    )
}
export default Navbar