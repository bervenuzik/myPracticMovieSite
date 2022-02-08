import React from 'react';
import {Link} from "react-router-dom";
import logo from "../images/logo.png"
require ("../styles/Navigation.css")

function Navigation(){



return(
    <div className='navigation' >
        <div className='wrapper' >
            <img className='logo' src={logo} alt="logo" />
            <div className='nav-bar'>
                <input className='search-input' type="text" />
            <ul>
           <li><Link to={"/"}>Most popular</Link></li>
                 <li>
                   <Link to={"/"}>Top 250</Link>
                </li>
                 <li>
                 <Link to={"/"}>Coming Soon</Link>
                </li>
                 <li></li>
             </ul>
           
            </div>
        </div>
       
    </div>
)

}

export default Navigation
