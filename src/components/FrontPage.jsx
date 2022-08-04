import React, { Component } from 'react';
class FrontPage extends Component {
    state = {  } 
    render() { 
        return (
            <div className='firstContainer'>
                <h2><b>Model 3</b></h2>
                <p>Order Online for <a href='#'>Touchless Delivery</a></p>
                <buttons>
                    <ul>
                        <li> <button className='customer'><a href='#' >CUSTOMER ORDER</a></button> </li>
                        <li> <button className='inventory'><a href='#'>EXISTING INVENTORY</a></button> </li>
                    </ul>
                </buttons>
                <arrow><i className='material-symbols-outlined'>keyboard_arrow_down</i></arrow>
            </div>
        );
    }
}
 
export default FrontPage;