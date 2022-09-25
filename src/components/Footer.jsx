import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Footer = () => {
  return (

        <div className='Footer '>
          <div >
              <img className='logo' style={{ height: 30, width: 200 }} src='' alt="logo" />
              <footer>
                  <ul style={{ fontSize: 20, margin:5 }} className='footerNavLinks'>
                      <li><a href='#'>Home</a> </li>
                      <li><a href='#'>Delivery Areas</a> </li>
                      <li><a href='#'>Careers</a> </li>
                      <li><a href='#'>Who we are?</a> </li>
                  </ul>
                  <ul style={{ fontSize: 20 }} className='footerSocialLinks'>
                      <li><a href='#'>Twitter</a> </li>
                      <li><a href='#'>Instagram</a> </li>
                      <li><a href='#'>FaceBook</a> </li>
                      <li><a href='#'>Discord</a> </li>
                      
                  </ul>
              </footer>

              <div className='patent'>
              <h5>SuperNova Technologies Private Limited <i class="material-icons">copyright</i></h5>
              <h5><li><a href='#' >Contact Us<i class="material-icons">phone</i></a> </li></h5>
              <h5><li><a href='#' >Privacy<i class="material-icons">policy</i></a> </li></h5>
              <h5><li><a href='#' >Terms<i class="material-icons">branding_watermark</i></a> </li></h5>
              </div>
          </div>
      </div>
  )
}

export default Footer