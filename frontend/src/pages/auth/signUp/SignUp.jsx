import React, { useEffect, useState } from 'react'
import "./signUp.css"
import { Divider } from '@mui/material';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import logo from "../../../utils/Logo.png"
import { useDispatch, useSelector } from 'react-redux';
import { registrationError, registrationPending, registrationSuccess } from '../../../features/authSlice/registrationSlice';
import { userRegistration } from '../../../api/userApi';

function SignUp() {

    const[MessageAddedAlert, setMessageAddedAlert] = useState(false)
    const [credentials, setCredentials] = useState({
        name: undefined,
        password: undefined,
        phone: undefined,
        email: undefined,
        confirmPassword: undefined,
    });

    
   //Redux states

    const {message} = useSelector(state => state.registration)

    const navigate = useNavigate()
    const dispatch = useDispatch();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/"


    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
        console.log(credentials)
    };

    const handleClick = async (e) => {
        e.preventDefault();

        dispatch(registrationPending());

        try {
        const res = await userRegistration(credentials)
        const AuthResponse = res?.response?.data?.message

        //Error
        if (AuthResponse){
            setMessageAddedAlert(true)//To turn on message alert
            return dispatch(registrationError(AuthResponse))
        }

        //console.log(isAuth)
        dispatch(registrationSuccess(res));
        navigate("/login")

        } catch (err) {
            dispatch(registrationError(err))
        }
    };


    useEffect(()=>{
        setTimeout(()=>{
            setMessageAddedAlert(false)
        },5000)
    },[MessageAddedAlert])



    return (
        <section>

            <div className="sign_container">


                <div className="sign_header">
                    <img src={logo} alt="signupimg" />
                </div>
                {MessageAddedAlert && <div className='errorMessage'>{message}</div> }
                <div className="sign_form">
                    <form method="POST">
                        <h1>Create account</h1>
                        <div className="form_data">
                            <label htmlFor="name">Your name</label>
                            <input type="text" name="name"
                                onChange={handleChange}
                                // value={uData.fname}
                                id="name" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email"
                                onChange={handleChange}
                                // value={uData.email}
                                id="email" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="mobile">Mobile number</label>
                            <input type="number" name="phone"
                                onChange={handleChange}
                                // value={uData.mobile}
                                id="phone" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password"
                                onChange={handleChange}
                                // value={uData.password}
                                id="password" placeholder="At least 6 characters" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="passwordg">Re-Enter Password</label>
                            <input type="password" name="confirmPassword"
                                onChange={handleChange}
                                // value={uData.cpassword}
                                id="confirmPassword" />
                        </div>
                        <button type="submit" className="signin_btn" onClick={handleClick}>Continue</button>

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