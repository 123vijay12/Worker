import React from 'react';
import './flash.css'

export default function SplashScreen ({logo}) {
  return (
    <div className='container-fluid full-height' >
      <div className='row'>
        <div className='clo-12'>  
        <img src={logo} alt="Gft" id="image"/>
        </div>
      </div>
     </div>
    
  );
}

