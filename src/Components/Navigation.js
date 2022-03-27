import React from 'react'
import {Link , BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Navigation.css';
import ms from '../Assets/ms.png'

const Navigation = () => {
    return (
   
     
       <div className="Nav_Bar">  
       <div className="Nav_Links">
       
       <Link className="Nav_Pages"  to='/home'><img className="Nav_Logo" src={ms} alt=""/></Link>
       <Link className="Nav_Pages"  to='/home'>|</Link>
       <Link className="Nav_Pages"  to='/'>Office</Link>
       <Link className="Nav_Pages" to='/'>Products</Link>
       <Link className="Nav_Pages"to='/'>Resources </Link>
       <Link className="Nav_Pages"to='/'>Templates</Link>
       <Link className="Nav_Pages"to='/'>Support</Link>
       <Link className="Nav_Pages"  to='/'>My account</Link>
       <Link className="Nav_Pages"  to='/'>
       <button className="Nav_buy_now">Buy now</button>
       </Link>
       <Link className="Nav_Pages right"  to='/'>All Microsoft</Link>
       <Link className="Nav_Pages "  to='/'>Sign in</Link>
       <Link className="Nav_Pages user-logo"  to='/'> <i class="fas fa-user"></i></Link>     
       </div>

      
     
     </div>
     
     
    )
}

export default Navigation
