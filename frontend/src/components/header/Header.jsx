import React, { useContext, useEffect, useState } from 'react'
import "./header.css"
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link, NavLink, useNavigate } from 'react-router-dom';
// import { Logincontext } from '../context/Contextprovider';
// import { ToastContainer, toast } from 'react-toastify';
import LogoutIcon from '@mui/icons-material/Logout';
// import 'react-toastify/dist/ReactToastify.css';
// import { makeStyles } from '@material-ui/core';
// import { makeStyles } from '@mui/styles'
import { Drawer, IconButton, List, ListItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import RightSide from './RightSide';
// import { getProducts } from '../redux/actions/action';
import { useSelector, useDispatch } from "react-redux";
import { products } from '../../utils/productData';
import {Search, Place, AddShoppingCart} from '@mui/icons-material';
import HeaderList from '../headerList/HeaderList';



const Header = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();
    const [text, setText] = useState();

    const {cartItems} = useSelector(state => state.cart)
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));


    useEffect(() => {
        localStorage.getItem('user') && setUser(JSON.parse(localStorage.getItem('user')));
    }, [])


    console.log(user)


    const [open, setOpen] = useState(false);
    const [liopen, setLiopen] = useState(true);

    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleClick = (event) => {
        setOpen(event.currentTarget);
    };
    const handleClose = () => {
        setOpen(false)
    };




    // for drawer
    const handleOpen = () => {
        setDrawerOpen(true);
    }

    const handleCloseDrawer = (e) => {
        setDrawerOpen(false)
    }

    const getText = (text) => {
        setText(text)
        setLiopen(false)
    }


    const handleLogout = (e) => {
        e.preventDefault()
        localStorage.removeItem("user")
        window.location.reload()
    }

    return (
        <header>
            <nav>
                <div className="left">
                    <IconButton className="hamburgur" onClick={handleCloseDrawer}>
                        <MenuIcon style={{ color: "#fff" }} />
                    </IconButton>

                        {/* here define the right header */}
                    <Drawer open={drawerOpen} onClose={handleCloseDrawer} >
                        <RightSide
                            user= {user}
                            userLogout={handleLogout} 
                            closeDrawer={handleCloseDrawer} />
                    </Drawer>

                    <div className="navlogo">
                        <NavLink to="/"> <img loading='lazy' src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo" /> </NavLink>
                    </div>

                    <div className='location'>
                        <Place/>
                        <div className='place'>
                            <span className='delivery'>Deliver to {user?.name}
                            </span>
                            <span className='country'>Canada</span>
                        </div>
                    </div>
                    
                </div>


                <div className="center">
                    <div className="nav_searchbaar">
                        <input type="text" name=""
                            onChange={(e) => getText(e.target.value)}
                            placeholder="Search Your Products" />

                        <div className="search_icon">
                            <i className="fas fa-search" id="search">
                                <Search/>
                            </i>
                        </div>
                        {
                            text &&
                            <List className="extrasearch" hidden={liopen}>
                                {
                                    products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                                        <ListItem>
                                            <NavLink to={`/getproductsone/${product.id}`} onClick={() => setLiopen(true)}>
                                                {product.title.longTitle}
                                            </NavLink>
                                        </ListItem>
                                    ))
                                }
                            </List>
                        }
                    </div>
                </div>



                <div className="right">

                    <div className="rightButton"  onClick={handleClick}>
                            <span>Hello,{" "}
                                {user? user.name : "sign in"}
                                </span>
                            <p>Account & Lists</p>
                    </div>

                    <div className="menu_div">
                        <Menu
                            anchorEl={open}
                            open={Boolean(open)}
                            onClose={handleClose}
                            // className={classes.component}
                        >

                            {!user && 
                            <MenuItem onClick={handleClose} style={{ margin: 5, fontSize: 12 }}>
                                <NavLink to="/login"  style={{ textDecoration: 'none' }} >
                                    Sign in
                                </NavLink>
                            </MenuItem>
                            }

                            <MenuItem onClick={handleClose} style={{ margin: 5, fontSize: 12}}>
                                My account
                            </MenuItem>

                            {
                                user &&
                            <MenuItem onClick={handleLogout} style={{ margin: 5, fontSize: 12}}>
                                Sign out
                            </MenuItem>
                            }

                            {/* {
                            account ? 
                            <MenuItem 
                            onClick={handleClose} 
                            style={{ margin: 10 }}>

                            <LogoutIcon style={{ fontSize: 16, marginRight: 3 }}  onClick={logoutuser} />   Logout</MenuItem> : ""} */}
                        </Menu>
                    </div>


                    <div className='rightButton'>
                        <span>Returns</span>
                        <p>& Orders</p>
                    </div>


                    <div className="cart_btn" onClick = {()=> navigate("/cart")}>
                        <span className="badge">{cartItems.length}</span>
                        <span className='cartIcon'>
                            <AddShoppingCart sx={{fontSize:"28px"}}/>
                        </span>
                        <p>Cart</p>
                    </div>



                </div>

            </nav>

            <div>
                <HeaderList/>
            </div>

        </header>
    )
}

export default Header;