import React, { useState } from "react";
import "./Singup.css"
import axios from 'axios';
import {Link} from 'react-router-dom';
function Singup() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mobile, setMobile] = useState("");
    const [address, setAddress] = useState("");
    const [gender, setGender] = useState("female");

    const singup = async() => {
      if(!name){
        alert("Name is required");
        return;
      }  
      if(!email){
        alert("E-mail is required");
        return;
      } 
      if(!password){
        alert("Password is required");
        return;
      }   
      if(!mobile){
        alert("Mobile is required");
        return;
      }  
      if(!address){
        alert("Address is required");
        return;
      }  

      const response = await axios.post("/singup",{
        name:name,
        email:email,
        password:password,
        mobile:mobile,
        address:address,
        gender:gender
      })

      alert(response?.data?.message);
      if (response?.data?. success){
        window.location.href ="/login";
      }
     
    };

    return (
        <div>
            <form className="singup-form">
                <h1 className="text-center">Singup</h1>
                <div>
                    <label htmlFor="name" className="label">Name</label>
                    <input type="text"
                        className="input-boxes"
                        id="name"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }} />
                </div>

                <div>
                    <label htmlFor="email" className="label" >E-mail</label>
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
                    <label htmlFor="password" className="label">Password</label>
                    <input type="text"
                        className="input-boxes"
                        id="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }} />
                </div>

                <div>
                    <label htmlFor="mobile" className="label">Mobile No.</label>
                    <input type="text"
                        className="input-boxes"
                        id="mobile"
                        placeholder="Enter your Mobile No."
                        value={mobile}
                        onChange={(e) => {
                            setMobile(e.target.value);
                        }} />
                </div>

                <div>
                    <label htmlFor="address" className="label">Address</label>
                    <input type="text"
                        className="input-boxes"
                        id="address"
                        placeholder="Enter your address"
                        value={address}
                        onChange={(e) => {
                            setAddress(e.target.value);
                        }} />
                </div>

                <div>
                    <input type="radio" id="male" 
                    name="gender" className="gender"
                     checked={gender==="male"}
                     onClick={() => {
                        setGender("male");
                     }}
                     
                     />

                    <label htmlFor="male"> Male</label>

                    <input type="radio" id="female"
                     name="gender" className="gender"
                      checked={gender==="female"}
                      onClick={() => {
                        setGender("female");
                     }}
                      />

                    <label htmlFor="female"> Female</label>
                </div>

                <button type="button" className="btn singup-btn"
                onClick={singup}
                >Singup</button>
                 <Link to="/login">
                <p  className="text-right">Already have an account</p>
                </Link>
            </form>
        </div>
    )
}

export default Singup