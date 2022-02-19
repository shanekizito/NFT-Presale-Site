import React from 'react'
import {Link , BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'


import logo from './logo.png'
const Navigation = (props) => {
  const [RevealNav,setRevealNav]=useState(false);
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  
  
    return (
      
       <div className={RevealNav==true?"Reveals_Nav":'Nav_Bar'}>
       
     <span className="Nav_Logo" ><img src={logo}></img><h2>DWNBD</h2> </span> 
      
       <div className="Nav_Links"> 
       <Link   to='/'><h3 className="Dashboard"><i class="fas fa-th-large"></i> Overview</h3></Link>
       <Link to='/investment'><h3 className="Investment"><i class="fas fa-dollar-sign"></i> Investments</h3></Link>
       </div>
      <div className="Nav_Socials">
        <h4>External Links</h4>
        <a href="https://twitter.com/downbadavax"><i class="fab fa-twitter"><span>Twitter</span></i></a>
        <a href="https://t.me/downbadavax "><i class="fab fa-telegram"><span>Telegram</span></i></a>
        <a href="https://discord.gg/NQXQZva2"><i class="fab fa-discord"><span>Discord </span> </i> </a>
        <a href="https://cryptovicky.medium.com"> <i class="fab fa-medium"><span>Medium</span></i></a>
        <a href="https://dexscreener.com/avalanche/0x91cdb6dda7ea6391e894152023247877e81dcc41 "> </a>

      
      
      
     
      </div>
     </div>
 
    )
}

export default Navigation
