import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {


    return (
        <>
    <div className="navbar">
     <h1>Big-Bazar 🛒</h1>
     <Link to="/login">Login</Link>
     <Link to="/signup">Signup</Link>
    <span>Hello ,User</span>
  </div>
        </>
    )
}
export default Navbar