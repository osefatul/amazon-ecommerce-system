import React from 'react'
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import { NavLink } from 'react-router-dom';
import { useContext, useState } from 'react';
// import { Logincontext } from '../context/Contextprovider';
// import { makeStyles } from '@material-ui/core';
import "./rightSide.css";
import { Divider } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';



function RightSide({user,  userLogout ,closeDrawer}) {


//  this is left drawer bt name is right header
    return (
        <div className="rightheader">
            <div className="right_nav">
                {
                    user ?
                    <Avatar className="avtar2"
                        title={user.name.toUpperCase()}>{user.name[0].toUpperCase()}
                    </Avatar> :
                    <Avatar className="avtar"/>
                }
                {user ? <h3>Hello, {user.name.toUpperCase()}</h3> : ""}
            </div>

            <div className="nav_btn" 
            // onClick={(e)=>closeDrawer()}
            >
                <NavLink to="/">Home</NavLink>
                <NavLink to="/">Shop By Category</NavLink>
                <Divider style={{ width: "100%", marginLeft: -20 }} />
                <NavLink to="/" style={{ marginTop: 10 }}>Today's Deal</NavLink>
                {
                    user ? <NavLink to="/cart">Your Order</NavLink> : 
                    <NavLink to="/login">Your Order</NavLink>
                }
                <Divider style={{ width: "100%", marginLeft: -20 }} />
                <div className="flag">
                    <NavLink to="" style={{ marginTop: 14 }}>Settings</NavLink>
                    <img src="https://cdn-icons-png.flaticon.com/512/555/555473.png" alt="india flag" style={{ width: 20, marginLeft: 20, marginTop:-4 }} />
                </div>

                {
                    user ?
                        <div className="flag">
                            <LogoutIcon style={{ fontSize: 18, marginRight: 4 }} />
                            <h3 onClick={(e) => userLogout()} style={{ cursor: "pointer", fontWeight: 500 }}>Log Out</h3>
                        </div>
                        : 
                        <NavLink to="/login">Sign in</NavLink>
                }


            </div>
        </div>
    )
}


export default RightSide