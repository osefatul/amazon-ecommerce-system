import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { loginSuccess } from "../features/authSlice/loginSlice";

function ProtectedRoutes() {

    const location = useLocation()
    const dispatch = useDispatch();
    const {isAuth} = useSelector(state=> state.login)
    
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
    const [userToken, setUserToken] = useState(localStorage.getItem('accessJWT'));
    
    useEffect(() => {
        if(user && userToken) dispatch(loginSuccess(user));

    },[user, userToken])

    return (
        <div>
            {isAuth? (
                <main>
                    <Outlet/>
                </main>
            ):
            <Navigate to="login" state={{from:location}} replace/>
            }
        </div>
    )
}

export default ProtectedRoutes