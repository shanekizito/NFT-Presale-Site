import React from 'react'
import {Link , BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const Navigation = () => {
    return (
       
       <div className="Nav_Bar container">
       <h4 className="Nav_Logo">NFT.</h4>
       <div className="Nav_Links">
       <Link className="Nav_Pages"  to='/'>Home</Link>
       <Link to='/'>Dashboard</Link>
       <Link to='https://github.com/shanekizito'>Faq</Link>
       </div>

         
      <div className="Nav_Socials">
      <i class="fab fa-discord"></i>
      <i class="fab fa-telegram"></i>
      <i class="fab fa-twitter"></i>
      <i class="fab fa-facebook-f"></i>
      <i class="fab fa-instagram"></i>
      
      </div>
     
     </div>
        
    )
}

export default Navigation
