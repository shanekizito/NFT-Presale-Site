import React from 'react'
import {Link , BrowserRouter as Router, Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
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
     
     
=======

import Login from './login';
import Main from '../Main';

const Navigation = (props) => {

  let id=props.userNo;

    return (

       <div className="Nav_Bar">
       <div className="Nav_Logo">
       <img src="https://img.icons8.com/emoji/48/000000/gorilla-emoji.png"/>
          <h2> <a href="/Home" >NF</a> </h2>
        </div>
       <div className="Nav_Links">
       <Link to='/Launchpad' >Launchpad</Link>
       <Link to='/collections/get' >Collections</Link>
       <Link to='/' params={id}>Dashboard</Link>
       <Link to='/Launchpad' >Metablog</Link>
       </div>

      <div className="Nav_Socials">
      <button className='login-button'><Link  to='/signUp'>Log in</Link></button>
      <i class="fab fa-discord"></i>
      <i class="fab fa-twitter"></i>
      <i class="fab fa-telegram"></i>
      <i class="fab fa-instagram"></i>
      </div>
     </div>
>>>>>>> 15f129ef73fd751b1d934993ce5ebe894c11839d
    )
}

export default Navigation
