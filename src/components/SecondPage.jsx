import React from 'react';
import lahoreArea from '../assets/lahore area.png';

export const SecondPage = () => {
  return (
    <div className='secondContainer'>
        <div className='deliveryCities'>
        <h1> Delivery Areas</h1>
        <div className='Lahore'>
                <h2><img src={lahoreArea} style={{height:40}} alt="Lahore Area" /> LAHORE</h2>
                {/* <h4>Areas</h4> */}
                <div className='lahoreAreas'>
                    <li><h6>Park View City | Abpara Housing Society | DHA Phase 12 EME Sector</h6></li>
                    {/* <li><h6> </h6></li> */}
                </div>
        </div>
        <h5  className='noAreaDesc' style={{letterSpacing:0.8}}>Your area not listed? No Doubt we are <a href='#' style={{color:'wheat'}} >Coming Soon</a> !</h5>
        <h6 style={{letterSpacing:0.2,fontFamily: 'Montserrat'}}>We are growing Faster, <a href="#" style={{color:'wheat'}}>Join Community</a>  for the Grocery "Change" of way Pakistan Shop.</h6>
    </div>
    </div>
  )
}

export default SecondPage