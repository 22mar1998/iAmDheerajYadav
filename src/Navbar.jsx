import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <div className="logo">
                <img src="https://i.pinimg.com/564x/55/cd/a1/55cda182a42ef7ec01c1b2dbbe889078.jpg" alt="" />
                <h1>iAmDheerajYadav</h1>
            </div>
            <div className="navbarlinks">
                <NavLink to="/" >Home</NavLink>
                <NavLink to="/About" >About</NavLink>
                <NavLink to="/Skills" >Skills</NavLink>
                <NavLink to="/Contactus" >Contact</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;