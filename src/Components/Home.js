import React from 'react';
import { useState } from 'react';
import '../App.css';
import {Link , BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import App from '../Main'


import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";
import { parse } from 'graphql';

const NFT_single = ({
  id,
  Name,
  uri
}) => {
  return (
   <div>
   <p>{Name} <br/> <span className="labelecondary">{id}</span> </p>
    
   
   </div>
  )
} ;




 export function Home(props) {

  return(
    <div className="Screen_container">
    <div className="Screen_container_inner">
   <div className="Row_zero">
     <div className="Account_Address container">
       <h2  className="titles">Wallet Stats </h2>
      <div className="wallet_stats_wrapper">
       <h3 className="label"> Address</h3>     
     <p> {`${props.ID+'. . . . . . . . . . '}`}</p>
    <div className="ethBalance">
     <h3 className="label"> Balance</h3>

      <h4 >{`${props.ethereumBalance}`}ETH <i class="fab fa-ethereum"></i></h4>
     
     </div>
     </div>
     </div>
     
     
     <div className="Account_SixtyDay_Averages container">
        <h2 className="titles">60 days Averages</h2>
    <p>
    NFTs in<br/>
        {`${props.sixtyDayTo}`} 
    </p>

    <p>
    NFTs Out <br/>
        {`${props.sixtyDayFrom}`} 
    </p>

    <p>
    Buys <br/>
        {props.SD_Buys.length} 
    </p>

    <p>
    Sale<br/>
        {`${props.SD_Sales.length}`} 
    </p>
<div className="nft_snipes">
    <div className="nft_picks container">
     <h3 className="titles">Account</h3>
     <div className="nft_picks_inner">
     <h4 className="label">NFTs owned</h4>
    <p> 98</p>
     <h4 className="label">Days account active</h4>
     <p> {`${props.account_period}`}</p>
     <h4 className="label">Diamond hands (Above 0.15 ETH)</h4>
     <p> {`${props.maxAverageHoldDuration} Days` }</p>
     <h4 className="label">Diamond hands (Below 0.15 ETH)</h4>
     <p> {props.maxAverageHoldDuration2!==null?`${props.maxAverageHoldDuration2}Days`:"0"}</p>
     </div>
     </div>
     <div className="Account_stats container">

<h3 className="titles">Hot picks <span><img src="https://img.icons8.com/emoji/48/000000/fire.png"/></span></h3>

<div className="Account_stats_inner">
<h4 className="label">Most expensive asset</h4>
<p>{`${props.expensive_assets.asset.name}`} </p>
<h3>{`${props.expensive_assets.price}`}ETH </h3>

<p> <img className="expensive_asset_image" src={`${props.expensive_assets.asset.image_url}`}/></p>
<h4 className="label">Highest asset amount</h4>
<p> {`${props.maxAverageHoldDuration}`}</p>
<h4 className="label">Highest Sell</h4>
<p> {props.maxAverageHoldDuration2!==null?`${props.maxAverageHoldDuration2}`:"0"}</p>
</div>
</div>
</div>

     
      </div>
     
     <div className="Account_Earliest_Stats container">
        <h3 className="titles">Earliest NFTS</h3>
         
      <div className="Earliest_Stats_Column1">
     
      <p className="Earliest_Stats_grid" >
      <h4 className="label">Buys <span><a> <span><i class="fas fa-location-arrow"></i></span></a></span></h4>
        
       Name <i class="fas fa-dice-d6"></i> <br/><span  className="labelecondary"> {props.SD_Buys.length>2?`${props.SD_Buys[props.SD_Buys.length-1].asset.collection.name}`:"Empty"}</span>
     <br/> Date <i class="fas fa-calendar-alt"></i><br/> <span  className="labelecondary">{props.SD_Buys.length>2?`${props.SD_Buys[props.SD_Buys.length-1].Date}`:"Empty"}</span> <br/>
     Price <i class="fas fa-calendar-alt"></i><br/> <span  className="labelecondary">{props.SD_Buys.length>2?`${props.SD_Buys[props.SD_Buys.length-1].price}ETH`:"Empty"}</span> <br/>
     

      </p>
     
    
      

      <p className="Earliest_Stats_grid" >
        
     <h4 className="label">Sale <span><a> <span><i class="fas fa-location-arrow"></i></span></a></span></h4>
       Name <i class="fas fa-dice-d6"></i> <br/><span  className="labelecondary"> {props.SD_Sales.length>2?`${props.SD_Sales[props.SD_Sales.length-1].asset.collection.name}`:"Empty"}</span>

       <br/> Date <i class="fas fa-calendar-alt"></i><br/> <span  className="labelecondary">{props.SD_Sales.length>2?`${props.SD_Sales[props.SD_Sales.length-1].Date}`:"Empty"}</span> <br/>
        Price <i class="fas fa-calendar-alt"></i><br/> <span  className="labelecondary">{props.SD_Sales.length>2?`${props.SD_Sales[props.SD_Sales.length-1].price}ETH`:"Empty"}</span> <br/>
       
       </p>
    
       </div>

       <div className="Earliest_Stats_Column2">
       
     
      <p className="Earliest_Stats_grid" >
      <h4 className="label">IN <span><a> <span><i class="fas fa-location-arrow"></i></span></a></span></h4>
       Name <i class="fas fa-dice-d6"></i> <br/> <span  className="labelecondary"> { props.received.name?`${props.received.name}`:"Empty"}</span> <br/> Date <i class="fas fa-calendar-alt"></i>   <br/>
       <span  className="labelecondary">{props.received.date?`${props.received.date }`:"Empty"} </span>  
      </p>


      <p  className="Earliest_Stats_grid">
      <h4 className="label">OUT <span><a> <span><i class="fas fa-location-arrow"></i></span></a></span></h4>
       <span  className="labelecondary"> </span>
       Name <i class="fas fa-dice-d6"></i> <br/><span  className="labelecondary"> {props.transfer.name?`${props.transfer.name}`:"Empty"}</span>
      <br/> Date <i class="fas fa-calendar-alt"></i>
       <br/>  
       <span  className="labelecondary">{props.transfer.date?`${props.transfer.date}`:"Empty"} </span>
      </p>

      </div>
    
     
     
      
      
      </div>

      </div>


    <div className="Row_one">   

    

      <div className="Account_Latest_Stats container">


      <h4 className="titles">Latest NFTS </h4> 

      <div className="Account_Latest_Column1">

<div className="Account_Latest_owned">
      <h4 className="label Buys-header">Buys <span><a> <span><i class="fas fa-location-arrow"></i></span></a></span></h4>


 <div className="Account_Latest_Buys"> 

      {props.immedateBuys.length>2?

        props.immedateBuys.map((item,i)=>{
          return(

          
            <p className="Latest_Stats_grid" key={i} >        
            Name <i class="fas fa-dice-d6"></i> <br/><span  className="labelecondary"> {item.asset!=='Empty'?`${item.asset.collection.name}`:"Empty"}</span>
           
           <br/> Date <i class="fas fa-calendar-alt"></i><br/> <span  className="labelecondary">{item.Date?`${item.Date}`:"Empty"}</span> <br/>
           Price <i class="fas fa-calendar-alt"></i><br/> <span  className="labelecondary">{item.price?`${item.price}ETH`:"Empty"}</span>
           </p>
             )})
      

     :<p className="Latest_Stats_grid"><span  className="labelPrimary"> Name <i class="fas fa-dice-d6"></i></span><br/>Empty <br/><span  className="labelPrimary"> Token Address <i class="fas fa-file-alt"></i></span> <br/>Empty
        <br/><span  className="labelPrimary"> Date  <i class="fas fa-calendar-alt"></i> </span>  <br/>Empty
        </p>}

</div>
</div>
      

<div className="Account_Latest_owned">

<h4 className="label Sells-header">Sells <span><a> <span><i class="fas fa-location-arrow"></i></span></a></span></h4>

<div className="Account_Latest_Sales"> 


      {props.immediateSales.length>2?

      
       
props.immediateSales.map((item,i)=>{

          return(

          <p className="Latest_Stats_grid" key={i} >        
       Name <i class="fas fa-dice-d6"></i> <br/><span  className="labelecondary"> {item.asset!=='Empty'?`${item.asset.collection.name}`:"Empty"}</span>
      
      <br/> Date <i class="fas fa-calendar-alt"></i><br/> <span  className="labelecondary">{item.Date?`${item.Date}`:"Empty"}</span> <br/>
      Price <i class="fas fa-calendar-alt"></i><br/> <span  className="labelecondary">{item.price?`${item.price}ETH`:"Empty"}</span>
      </p>
        )})
        

     :<p className="Latest_Stats_grid"><span  className="labelPrimary"> Name <i class="fas fa-dice-d6"></i></span><br/>Empty <br/><span  className="labelPrimary"> Token Address <i class="fas fa-file-alt"></i></span> <br/>Empty
     <br/><span  className="labelPrimary"> Date  <i class="fas fa-calendar-alt"></i> </span>  <br/>Empty
     </p>}

</div>
        
     </div>
     </div>


          
     <div className="Account_Latest_Column2">
     <div className="Account_Latest_owned">
      <h4 className="label Sells-header">IN</h4>
      <div className="Account_Latest_In" > 

      <span  className="labelecondary">  { props.latestReceived.length>2?
        
        props.latestReceived.map((LR,i)=>{
          return(<p className="Latest_Stats_grid" key={i}><span  className="labelPrimary"> Name <i class="fas fa-dice-d6"></i></span><br/>{LR.name} <br/><span  className="labelPrimary"> Token Address <i class="fas fa-file-alt"></i></span> <br/>{LR.id}
          <br/><span  className="labelPrimary"> Date  <i class="fas fa-calendar-alt"></i> </span>  <br/>{LR.date}
          </p>) 
        }):<p className="Latest_Stats_grid"><span  className="labelPrimary"> Name <i class="fas fa-dice-d6"></i></span><br/>Empty <br/><span  className="labelPrimary"> Token Address <i class="fas fa-file-alt"></i></span> <br/>Empty
        <br/><span  className="labelPrimary"> Date  <i class="fas fa-calendar-alt"></i> </span>  <br/>Empty
        </p>}</span>
      
     </div>
     </div>

     <div className="Account_Latest_owned">
           
      <h4 className="label Sells-header">OUT</h4>

      <div className="Account_Latest_Out" > 
        <span  className="labelecondary">  { props.latestTransferred.length>2?        
        props.latestTransferred.map((LT,i)=>{
          return(<p className="Latest_Stats_grid" key={i}><span  className="labelPrimary"> Name <i class="fas fa-dice-d6"></i></span><br/>{LT.name} <br/><span  className="labelPrimary"> Token Address <i class="fas fa-file-alt"></i></span> <br/>{LT.id}
          <br/><span  className="labelPrimary"> Date <i class="fas fa-calendar-alt"></i> </span>   <br/>{LT.date}
          </p>) 
        }):<p className="Latest_Stats_grid"><span  className="labelPrimary"> Name <i class="fas fa-dice-d6"></i></span><br/>Empty <br/><span  className="labelPrimary"> Token Address <i class="fas fa-file-alt"></i></span> <br/>Empty
        <br/><span  className="labelPrimary"> Date  <i class="fas fa-calendar-alt"></i> </span>  <br/>Empty
        </p>}
        </span>
      
      </div>
      </div>

      </div>
      </div>
    </div>

      </div> 


<div className="NFTS-container container">

      <h3 className="header-NFTS titles">NFT's in Wallet</h3>

    <div className={props.NFTS.length>2?"Account_Recent_Transactions  ":"Account_Empty_Transactions "}> 
  
       {props.NFTS.length>2?props.NFTS.map((nft,i) => {
          return (
            <NFT_single
             
            Name={nft.registry.name}
            id={nft.registry.id}
            key={i}
            />
          )
       }):<h5>None</h5> }
       
       
      </div>
           
    </div>

</div>
  );  


 
}


  export default Home;