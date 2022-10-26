import React, { useContext, useEffect, useState } from 'react'
import "../signUp/signUp.css"
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Divider } from '@mui/material';
import logo from "../../../utils/Logo.png"
import { useDispatch, useSelector } from "react-redux";
import { loginFail, loginPending, loginSuccess } from '../../../features/authSlice/loginSlice';
import { loginUser, userLogin } from '../../../api/userApi';

function SignIn() {


    const[MessageAddedAlert, setMessageAddedAlert] = useState(false)

    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined,
    });

      //Redux states
    const {error, isAuth, user} = useSelector(state => state.login)

    const navigate = useNavigate()
    const dispatch = useDispatch();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/"

    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();

        dispatch(loginPending());
        try {
        const res = await loginUser(credentials)
        const AuthResponse = res?.response?.data?.message

        //Error
        if (AuthResponse){
            setMessageAddedAlert(true)//To turn on message alert
            return dispatch(loginFail(AuthResponse))
        }

        //console.log(isAuth)
        localStorage.setItem("user", JSON.stringify(res.details))
        dispatch(loginSuccess(res.details));
        navigate(from , {replace:true})

        } catch (err) {
            dispatch(loginFail(err))
        }
    };

    useEffect(()=>{
        isAuth && user && navigate(from , {replace:true})
    },[isAuth, user])


    useEffect(()=>{
        setTimeout(()=>{
            setMessageAddedAlert(false)
        },3000)
    },[MessageAddedAlert])



return (
    <section>
        <div className="sign_container">

        {MessageAddedAlert && <div className='errorMessage'>{error}</div> }

            <div className="sign_header">
                <img src={logo} alt="signupimg" />
            </div>

            <div className="sign_form">
                <form onSubmit={handleClick}>
                    <h1>Sign-In</h1>

                    <div className="form_data">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email"
                            onChange={handleChange}
                            // value={credentials.email}
                            id="email" />
                    </div>
                    <div className="form_data">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password"
                            onChange={handleChange}
                            // value={credentials.password}
                            id="password" placeholder="At least 6 characters" />
                    </div>
                    <button type="submit" className="signin_btn" >Continue</button>
                </form>
            </div>


            <div className="create_accountinfo">

            <Divider>
                New to Amazon?
            </Divider>

            <button>  
                <NavLink to="/register">
                Create your Amazon Account
                </NavLink>
            </button>
        </div>

    </div>


    <div className='bottom_container'>
        <Divider />
        <div className='bottom_section'>
            <p>
                <span>Conditions of Use</span>
                <span>Privacy Notice</span>
                <span>Help</span>
            </p>

            <p>© 1996-2022, Amazon.com, Inc. or its affiliates</p>
        </div>
    </div>

    </section>
)
}

export default SignIn