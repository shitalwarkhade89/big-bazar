import React, { useState } from "react";
import "./Singup.css"
function Singup() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mobile, setMobile] = useState("");
    const [address, setAddress] = useState("");
    const [gender, setGender] = useState("female");

    return (
        <div>
            <form className="singup-form">
                <h1 className="text-center">Singup</h1>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text"
                        className="input-boxes"
                        id="name"
                        placeholder="Enter your name"
                        value={name}
                        onchange={(e) => {
                            setName(e.target.value);
                        }} />
                </div>

                <div>
                    <label htmlFor="email">E-mail</label>
                    <input type="text"
                        className="input-boxes"
                        id="email"
                        placeholder="Enter your 
                        E-mail"
                        value={email}
                        onchange={(e) => {
                            setName(e.target.value);
                        }} />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="text"
                        className="input-boxes"
                        id="password"
                        placeholder="Enter your password"
                        value={password}
                        onchange={(e) => {
                            setName(e.target.value);
                        }} />
                </div>

                <div>
                    <label htmlFor="mobile">Mobile No.</label>
                    <input type="text"
                        className="input-boxes"
                        id="mobile"
                        placeholder="Enter your Mobile No."
                        value={mobile}
                        onchange={(e) => {
                            setName(e.target.value);
                        }} />
                </div>

                <div>
                    <label htmlFor="address">Address</label>
                    <input type="text"
                        className="input-boxes"
                        id="address"
                        placeholder="Enter your address"
                        value={address}
                        onchange={(e) => {
                            setName(e.target.value);
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

                <button type="button" className="btn">Singup</button>
            </form>
        </div>
    )
}

export default Singup