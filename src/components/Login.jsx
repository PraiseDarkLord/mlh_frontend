import React, { useState } from 'react'
import "./CSS/Login.css"

import LoginImg from "./Assets/login.svg"
import SignupImg from "./Assets/notetaking.svg"


function Login() {
    const [selectedForm, setSelectedForm] = useState("signup"); // New state variable

    const handleSwitchClick = (e) => {
        setSelectedForm(e.target.textContent.toLowerCase()); // Update state based on clicked text
    };


    return (
        <div className='account-warpper'>

            <div className={`account-login ${selectedForm === "login" ? "" : "hidden"}`}>
                <div className="account-info">
                    <h1>Login</h1>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder='Enter your Email'
                    />
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder='Enter your Password'
                    />
                    <button
                        type="submit">
                        Submit
                    </button>

                    <p>Don't have an account ?
                        <span className='switch' onClick={handleSwitchClick}>
                            Signup
                        </span>
                    </p>
                </div>

                <div className="account-image">
                    <img src={LoginImg} alt="" />
                </div>

            </div>

            <div className={`account-signup ${selectedForm === "signup" ? "" : "hidden"}`}>

                <div className="account-image">
                    <img src={SignupImg} alt="" />
                </div>

                <div className="account-info">
                    <h1>Sign Up</h1>
                    <input
                        type="text"
                        name='fname'
                        id='fname'
                        placeholder='Enter your First Name'
                    />
                    <input
                        type="text"
                        name='lname'
                        id='lname'
                        placeholder='Enter your Last Name'
                    />
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder='Enter your Email'
                    />
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder='Enter your Password'
                    />
                    <button
                        type="submit">
                        Submit
                    </button>

                    <p>Already have an account ?
                        <span className='switch' onClick={handleSwitchClick}>
                            Login
                        </span>
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Login