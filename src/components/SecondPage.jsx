import React, { Component } from 'react';
class SecondPage extends Component {
    state = {  } 
    render() { 
        return (
            <div className='secondContainer'>
                <h2><b>Model Y</b></h2>
                <p>Order Online for <a href='#'>Touchless Delivery</a></p>
                <buttons>
                    <ul>
                        <li> <button className='customer2'><a href='#' >CUSTOMER ORDER</a></button> </li>
                        <li> <button className='inventory2'><a href='#'>EXISTING INVENTORY</a></button> </li>
                    </ul>
                </buttons>
            </div>
        );
    }
}


export default SecondPage;