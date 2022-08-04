import React, { Component } from 'react';
import Logo from '../assets/logo.png' ;
class Navbar extends Component {
    render() { 
        return (
            
                <div className='navbar '>
                    <header>
                        <img className='logo' style={{height:30, width:200}} src={Logo} alt="logo"/>
                        <models>
                            <ul className='modelNames'>
                                <li><a href='#' >Model 3 </a></li>
                                <li><a href='#' >Model Y </a></li>
                            </ul>
                        </models>
                        <nav>
                            <ul className='nav_links'>
                            <li><a href='#' >Shop</a> </li>
                                <li><a href='#' >Account</a> </li>
                                <li><a href='#' >Menu</a> </li>
                            </ul>
                        </nav>
                        </header>
                </div>

            
        );
    }
}
 
export default Navbar;