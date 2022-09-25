import React from 'react';   
import {Link} from 'react-router-dom';


export const  Navbar = ()=> {
        return (
            
                <div className='navbar '>
                    <header>
                        <img className='logo' style={{height:30, width:200}} src='' alt="logo"/>
                        <nav>
                            <ul className='nav_links'>
                            <li><a href='#' >Home</a> </li>
                            <li><a href='#' >Delivery Areas</a> </li>
                            <li><a href='#' >Careers</a> </li>
                            <li><a href='#' >Who we are?</a> </li>
                            </ul>
                        </nav>
                        </header>
                </div>
        );
}
 
export default Navbar;