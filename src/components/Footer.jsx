import React, { Component } from 'react';
class Footer extends Component {
    state = {  } 
    render() { 
        return (<><div className='Footer'>
            <ul className='charger'>
                <li><h1><b>Accessories</b></h1> </li>
                <li> <button>Shop Now</button></li>
            </ul>
        </div><div>
                <ul className='footerLink'>
                    <li><a href='#'>Tesla 2022</a></li>
                    <li><a href='#'>Privacy and Legal</a></li>
                    <li><a href='#'>Vehicle Recalls</a></li>
                    <li><a href='#'>Contact</a></li>
                    <li><a href='#'>Careers</a></li>
                    <li><a href='#'>News</a></li>
                    <li><a href='#'>Engage</a></li>
                    <li><a href='#'>Location</a></li>
                </ul>
            </div></>
        );
    }
}
 
export default Footer;