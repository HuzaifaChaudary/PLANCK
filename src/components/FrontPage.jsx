import React from 'react';
import frontLowerBg from '../assets/bg4.jpeg' ;


export const FrontPage = ()=> {
        return (
            <div className='firstContainer'>
                <ul>
                    <li><h1 className='delivery'><b>Delivering in</b></h1></li>
                    <li><h1 className='deliveryCity'><b>Lahore</b></h1></li>
                    <div className='OS'>
                        <li><button className='app_store'>App Store</button></li>
                        <li><button className='play_store'>Play Store</button></li>
                    </div>
                </ul>
                <div>
                {/* <img src={frontLowerBg} alt="frontpage lower bg"  className='frontPageLowerBg'/> */}
                
                </div>
            </div>
        );
}
 
export default FrontPage;