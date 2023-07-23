import React, { useState } from 'react'
import Logo from '../assets/buypotatobakepotato.png';
import { Link } from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder';
import "../styles/NavBar.css";
import jwt from 'jwt-decode'
import { Button } from '@mui/material';

function NavBar() {

    const [openLinks, setOpenLinks] = useState(false);
    const [user, setUser] = React.useState();

    React.useEffect(() => {
        if (sessionStorage.getItem("user") !== null) {
            setUser(JSON.parse(sessionStorage.getItem("user")));

        }
    }, [])

    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    }
    if (user) {
        return (
            <div className='navbar'>
                <div className='leftSide' id={openLinks ? "open" : "close"}>
                    <img src={Logo} alt="word logo" />
                    <div className='hiddenLinks'>
                        <Link to="/"> Home </Link>
                        <Link to="/about"> About</Link>
                        <Link to="/contact"> Contact </Link>
                        <Link to="/recipes"> Recipes </Link>
                        <Link to="/login"> Logout </Link>
                    </div>
                </div>
                <div className='rightSide'>
                    <Link to="/home"> Home </Link>
                    <Link to="/about"> About</Link>
                    <Link to="/contact"> Contact </Link>
                    <Link to="/recipes"> Recipes </Link>
                    <Link to="/likedrecipes"> Liked Recipes </Link>
                    <Link to="/home" onClick={()=>{sessionStorage.clear(); window.location.reload(true);}}>Logout</Link>
                    <button onClick={toggleNavbar}>
                        <ReorderIcon />
                    </button>
                    
                </div>
                
            </div>
        )
    } else {
        return (
            <div className='navbar'>
                <div className='leftSide' id={openLinks ? "open" : "close"}>
                    <img src={Logo} alt="word logo" />
                    <div className='hiddenLinks'>
                        <Link to="/"> Home </Link>
                        <Link to="/about"> About</Link>
                        <Link to="/contact"> Contact </Link>
                        <Link to="/signup"> Sign Up </Link>
                        <Link to="/login"> Login </Link>
                    </div>
                </div>
                <div className='rightSide'>
                    <Link to="/home"> Home </Link>
                    <Link to="/about"> About</Link>
                    <Link to="/contact"> Contact </Link>
                    <Link to="/signup"> Sign Up </Link>
                    <Link to="/login"> Login </Link>
                    <button onClick={toggleNavbar}>
                        <ReorderIcon />
                    </button>
                </div>

            </div>
        )
    }
}

export default NavBar
