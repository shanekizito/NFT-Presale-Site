import React from 'react'
import './Homepage.css';
import arabica from '../images/arabica.png';
import kitekat  from '../images/kitekat.png';
import NFT from '../images/NFT.PNG';
import NFT2 from '../images/NFT2.PNG';
import NFT3 from '../images/NFT3.PNG';
import NFT4 from '../images/NFT4.PNG';
import NFT5 from '../images/NFT5.PNG';
import {Link , BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const Homepage = () => {
    return (
        <div className="homepage-screen">
             <div className="hero-container-outer">
            <div className="hero-container">
            <h1 className="hero-title">Nana Flip highlights NFT signals</h1>
            <h2 className="hero-subtitle">The conclusive   NFT management platform that allows you to manage your NFTs in a secure and easy way.</h2>
            <div className="hero-buttons"><button className="hero-button">Explore </button><button className="hero-button-2">Get Started<i class="fas fa-external-link-alt"></i></button></div>
            </div>
            <div className="hero-image">
            <img src={arabica}/>
            <h3>Launch</h3>
            <div class="timer-hero">
                    <div class="days-hero">
                        <span id="days_left"> 5</span>
                        days
                    </div>
                    <div class="hours-hero">
                        <span id="hours_left"> 9 </span>
                        hours
                    </div>
                    <div class="mins-hero">
                        <span id="mins_left"> 8 </span>
                        mins
                    </div>
                    <div class="sec-hero">
                        <span id="secs_left"> 1 </span>
                        secs
                    </div>                 
                </div>
            </div>
            <div className="hero-image-2">
            <img src={kitekat}/>
            <div class="hero-bid">
            <p>Kitkat</p>
            <button className="asset-button">5<i class="fab fa-ethereum"></i></button>
            </div>
            </div>
            </div>

            <div className="section-container">
            <div className="section-title"><h1>One tool . Multiple benefits . Tons of features</h1>
             <div className="Screen_container_inner">
  
  
   <div className="Row_zero-home">
     
     
    
     
      
    </div>
       </div>

<div className="nft_snipes-home">
    <div className="nft_picks-home  container">
     <h3 className="titles">Account</h3>
     <div className="nft_picks_inner">
     <h4 className="label">NFTs owned</h4>
    <p> 98</p>
     <h4 className="label">Days account active</h4>
     <p>5</p>
     <h4 className="label">Diamond hands (Above 0.15 ETH)</h4>
     <p> 2</p>
     <h4 className="label">Diamond hands (Below 0.15 ETH)</h4>
     <p> 12</p>
     </div>
     </div>
     <div className="Account_stats-home container">

<h3 className="titles">Hot picks <span><img src="https://img.icons8.com/emoji/48/000000/fire.png"/></span></h3>

<div className="Account_stats_inner-home">
<h4 className="label">Most expensive asset</h4>

<div className="expensive-af"><img className="expensive_asset_image expensive-af" src={kitekat}/>
<div className="expensive-af-inner">
    <h5>KitKat</h5>  <h5>7 ETH</h5></div></div>
<h4 className="label">Highest asset amount</h4>
<p> 12 CryptoPunks</p>
<h4 className="label">Highest Sell Price</h4>
<p> 10 ETH -CRYPTOPUNKS</p>

</div>

</div>
<div className="Account_Address-home container">
       <h2  className="titles">Wallet Stats </h2>
      <div className="wallet_stats_wrapper">
       <h3 className="label"> Address</h3>     
     <p> 0x238344cv478th333552</p>
    <div className="ethBalance">
     <h3 className="label"> Balance</h3>

      <h4 > 2 ETH <i class="fab fa-ethereum"></i></h4>
     
     </div>
</div>

     
      </div>
     
  

   
     
      </div> 
           
            </div>
            
            </div>

            <div className="section-container-2">
            <div className="section-title-2"><h1>Launchpad</h1>
            <h2>Browse through the hottest assets in the market which our team and AI has been working on</h2>
            </div>
            <img src={ NFT5}/>
            </div>

            <div className="section-container-card">
            <div className="section-title-card">
                <h1>Keep  track of<br/> your favorite <br/>collections</h1>
                </div>
                <div className="section-card-container">
                <h3>Browse through the hottest assets in the market which our team and AI has been working on</h3>  
            <button className="section-button">Get Started</button>
                </div>
            
           
            </div>

           
         <div className="section-container-4">
            <div className="section-title-4"><h1>Mint Calendar</h1>
            <h2>set up reminder notifications for upcoming mints , we know how it hurts when you have to purchase through secondary markets</h2> </div>
            </div>



            <div className="section-container-card bottom">
            <div className="footer-container">
               <div className="footer-row-1">
               <div className="Nav_Logo">
               <img src="https://img.icons8.com/emoji/48/000000/gorilla-emoji.png"/>
               <h2><a href="/Home" ></a>Nana Flip NFT Marketplace  </h2>

                </div>
                <div className="Footer-subscription">
                <h3>Subscribe to our newsletter</h3>
                <h4>Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating Nana Flips.</h4>
                <input class="footer-input" type="text" placeholder="Enter your email"/>
                <button className="subscribe-button">Subscribe</button>

                </div>
              
   
                  </div>
 
                <div className="footer-row-2">
                <div className="Nav_Socials">
              
              
         
                    <i class="fab fa-discord"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-telegram"></i>
                    <i class="fab fa-instagram"></i>
                </div>
             </div>

                <div className="footer-col-3">
                 <h5>Leaderboards</h5>
                 <h5>Launchpad</h5>
                 <h5>Metablog</h5>
                 <h5>About</h5> 
                 </div>
           
            </div>
            </div>
         </div>
       
    )
}

export default Homepage
