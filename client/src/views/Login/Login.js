import React,{useState} from "react";
import "./Login.css";
import axios from "axios";
function Login(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
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
                <button className=" btn login-btn">Login</button>
           
        </form>
     </div>
    )
}

export default Login