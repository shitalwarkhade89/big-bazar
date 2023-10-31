import React,{useState} from "react";
import "./Login.css";
import axios from "axios";
import { Link, json } from "react-router-dom";

function Login(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // post/login
    const login = async() => {
    const response = await axios.post("/login",{
        email:email,
        password:password
    })
    // local storage
    alert(response?.data?.message );
    if(response?. data?.success){
        localStorage.setItem("user",JSON.stringify(response?.data?.data));
        window.location.href ="/";
    }
    }
    return(
     <div>
        <form className="login-form">
           <h1 className="text-center">Login</h1>
           <div>
                    <label htmlFor="email"  className="label">E-mail</label>
                    <input type="text"
                        className="input-boxes"
                        id="email"
                        placeholder="Enter your 
                        E-mail"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }} />
                </div>

                <div>
                    <label htmlFor="password"  className="label">Password</label>
                    <input type="text"
                        className="input-boxes"
                        id="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }} />
                </div>
               
                <button type="button" className=" btn login-btn" onClick={login}>Login</button>
                <Link to="/signup">
                <p  className="text-right">create a account</p>
                </Link>
        
           
        </form>
     </div>
    )
}

export default Login