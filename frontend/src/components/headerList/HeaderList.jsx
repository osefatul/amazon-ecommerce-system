import React, { useEffect, useState } from 'react'
import { Drawer, IconButton, List, ListItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import "./headerList.css"
import RightSide from '../header/RightSide';
import { useNavigate } from 'react-router-dom';

function HeaderList() {

    const [open, setOpen] = useState(false);
    const [liopen, setLiopen] = useState(true);
    const [dropen, setDropen] = useState(false);
    const navigate = useNavigate();

    const handleClick = (event) => {
        setOpen(event.currentTarget);
    };
    const handleClose = () => {
        setOpen(false)
    };

    // const { account, setAccount } = useContext(Logincontext);

    const getdetailsvaliduser = async () => {
        const res = await fetch("/validuser", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        });

        const data = await res.json();
        // console.log(data);

        if (res.status !== 201) {
            console.log("first login");
        } else {
            // console.log("cart add ho gya hain");
            // setAccount(data);
        }
    }

    useEffect(() => {
        getdetailsvaliduser();
    }, []);


    // for logout
    const logoutuser = async () => {
        const res2 = await fetch("/logout", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        });

        const data2 = await res2.json();
        // console.log(data2);

        if (!res2.status === 201) {
            const error = new Error(res2.error);
            throw error;
        } else {
            // setAccount(false);
            setOpen(false)
            // toast.success("user Logout 😃!", {
            //     position: "top-center"
            // });
            navigate("/");
        }
    }

    // for drawer
    const handelopen = () => {
        setDropen(true);
    }

    const handleClosedr = () => {
        setDropen(false)
    }


    return (
        <div className='nav_list'>
            <ul>
                <p className='firstElement'>
                    <IconButton className="" onClick={handelopen}>
                        <MenuIcon style={{ color: "#fff" }} />
                    </IconButton>

                        {/* here define the right header */}
                    <Drawer open={dropen} onClose={handleClosedr} >
                        <RightSide userlog={logoutuser} logclose={handleClosedr} />
                    </Drawer>

                </p>

                <li>
                    Buy Again
                </li>
                <li>
                    Customer Service
                </li>
                <li>
                    Gift Cards
                </li>
                <li>
                    Registry
                </li>
                <li>
                    Sell
                </li>
            </ul>
        </div>
    )
}

export default HeaderList