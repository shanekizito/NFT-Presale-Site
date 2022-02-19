import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navigation.css';




function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

 
  return (
    <>
      <div className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          DWNBD  
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
              <Link
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                <h3 className="Dashboard"> Dashboard</h3>
              </Link>
            </li>

            <li className='nav-item'>
              <Link to='/investment' className='nav-links' onClick={closeMobileMenu}>
              <h3 className="Investment"> Investments</h3>
              </Link>  
            </li>


            <li className='nav-links smedia'>
              
              <a href="https://t.me/downbadavax"><h4 className="Investment"><i class="fab fa-telegram"><span></span></i></h4></a>
            </li>
            <li className='nav-links smedia'>
              
              <a href="https://twitter.com/downbadavax"><h4 className="Investment"><i class="fab fa-twitter"><span></span></i> </h4></a>
            </li>

            <li className='nav-links smedia'>
            <a href="https://discord.gg/NQXQZva2"><h4 className="Investment"><i class="fab fa-discord"><span></span></i> </h4></a>
              
            </li>

            <li className='nav-links smedia'>
            <a href="https://cryptovicky.medium.com"><h4 className="Investment"><i class="fab fa-medium"><span></span></i> </h4></a>
              
            </li>

            <li className='nav-links smedia'>
            <a href="https://cryptovicky.medium.com"><h4 className="Investment"></h4></a>
              
            </li>
           <div className='mobile-nav-items'>
            <div className="Nav_Socials">
            </div>
            </div>
          </ul>
          
        </div>
      </div>
    </>
  );
}

export default Navbar;