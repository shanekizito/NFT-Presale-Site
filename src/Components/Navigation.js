import React from 'react'
import {Link , BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
    )
}

export default Navigation
