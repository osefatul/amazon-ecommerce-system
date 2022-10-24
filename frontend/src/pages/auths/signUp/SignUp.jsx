import React, { useState } from 'react'
import "./signUp.css"
import { Divider } from '@mui/material';
import { NavLink } from 'react-router-dom';
import logo from "../../../utils/Logo.png"

function SignUp() {

    const [uData, setUData] = useState({
        fname: "",
        email: "",
        mobile: "",
        password: "",
        cpassword: ""
    });


    
    const adddata = (e) => {
        const { name, value } = e.target;
        // console.log(name,value);

        setUData((pre) => {
            return {
                ...pre,
                [name]: value
            }
        })
    };



    const sendData = async (e) => {
        e.preventDefault();

        const { fname, email, mobile, password, cpassword } = uData;
        try {
            const res = await fetch("/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    fname, email, mobile, password, cpassword
                })
            });

            const data = await res.json();
            // console.log(data);

            if (res.status === 422 || !data) {
                console.log("invalid data")
            } else {
                setUData({
                    ...uData, fname: "", email: "",
                    mobile: "", password: "", cpassword: ""
                });
            }
        } catch (error) {
            console.log("front end ka catch error hai" + error.message);
        }
    }




    return (
        <section>

            <div className="sign_container">
                <div className="sign_header">
                    <img src={logo} alt="signupimg" />
                </div>
                <div className="sign_form">
                    <form method="POST">
                        <h1>Create account</h1>
                        <div className="form_data">
                            <label htmlFor="name">Your name</label>
                            <input type="text" name="fname"
                                onChange={adddata}
                                value={uData.fname}
                                id="name" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email"
                                onChange={adddata}
                                value={uData.email}
                                id="email" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="mobile">Mobile number</label>
                            <input type="number" name="mobile"
                                onChange={adddata}
                                value={uData.mobile}
                                id="mobile" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password"
                                onChange={adddata}
                                value={uData.password}
                                id="password" placeholder="At least 6 characters" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="passwordg">Re-Enter Password</label>
                            <input type="password" name="cpassword"
                                onChange={adddata}
                                value={uData.cpassword}
                                id="passwordg" />
                        </div>
                        <button type="submit" className="signin_btn" onClick={sendData}>Continue</button>

                        <div className='post_button_data'>
                            <p>
                            By creating an account, you agree to Amazon's
                            </p>
                            <p> 
                                <span>
                                    Conditions of Use
                                </span> and
                                <span>
                                    {""} Privacy Notice
                                </span>
                                </p>
                        </div>

                        <Divider />

                        <div className="signin_info">
                            <p>Already have an account?</p>
                            <NavLink to="/login">Sign in</NavLink>
                        </div>
                    </form>
                </div>
            </div>

            <Divider />

            <div className='bottom_section'>
                <p>
                    <span>Conditions of Use</span>
                    <span>Privacy Notice</span>
                    <span>Help</span>
                </p>

                <p>© 1996-2022, Amazon.com, Inc. or its affiliates</p>
            </div>
        </section>
    )
}


export default SignUp