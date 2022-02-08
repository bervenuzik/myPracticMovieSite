import React from 'react';
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
                 <li>Most popular</li>
                 <li>Top 250</li>
                 <li>Coming Soon</li>
                 <li></li>
             </ul>
            </div>
        </div>
       
    </div>
)

}

export default Navigation
