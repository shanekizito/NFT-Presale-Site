import React from 'react';
import { useState } from 'react';
import '../App.css';
import {Link , BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import App from '../App'


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





 export function Home(


props) {
 


  return(

    <div className="Screen_container">
      
     
  
 
      <button className="refreshButton" type="submit" onClick={props.handleRefresh}>Refresh <span><i class="fas fa-sync"></i> </span></button>
    <div className="Screen_container_inner">
   <div className="Row_zero">
     <div className="Account_Address container">

       <h2 >Wallet Stats</h2>
       <h3 className="label">Account Address</h3>
     <p> {`${props.ID}`}</p>



     <h3 className="label">Account Balance</h3>
      <h4>{`${props.ethereumBalance}`}ETH <i class="fab fa-ethereum"></i></h4>
      <h3 className="label">NFTS in Wallet</h3>
     <h4>{`${props.assetAmount}`}</h4>
     <h3 className="label">Days account active</h3>
     <p> {`${props.account_period}`}</p>
     
     </div>
     

     <div className="Account_SixtyDay_Averages container">
        <h3 className="label">60 days Averages</h3>
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

     
     
      </div>
     
     
     <div className="Account_Earliest_Stats container">
        <h3 className="header">Earliest NFTS</h3>
         
     

      <div className="Earliest_Stats_Column1">
     <h4 className="label">Buys</h4>
      <p className="Earliest_Stats_grid" >
        
       Name <i class="fas fa-dice-d6"></i> <br/><span  className="labelecondary"> {props.SD_Buys.length>2?`${props.SD_Buys[props.SD_Buys.length-1].asset.collection.name}`:"Empty"}</span>
     <br/> Date <i class="fas fa-calendar-alt"></i><br/> <span  className="labelecondary">{props.SD_Buys.length>2?`${props.SD_Buys[props.SD_Buys.length-1].Date}`:"Empty"}</span> <br/>
     Price <i class="fas fa-calendar-alt"></i><br/> <span  className="labelecondary">{props.SD_Buys.length>2?`${props.SD_Buys[props.SD_Buys.length-1].price}ETH`:"Empty"}</span>
     
      </p>
     
    
      

     <h4 className="label">Sale</h4>
      <p className="Earliest_Stats_grid" >
       Name <i class="fas fa-dice-d6"></i> <br/><span  className="labelecondary"> {props.SD_Sales.length>2?`${props.SD_Sales[props.SD_Sales.length-1].asset.collection.name}`:"Empty"}</span>

       <br/> Date <i class="fas fa-calendar-alt"></i><br/> <span  className="labelecondary">{props.SD_Sales.length>2?`${props.SD_Sales[props.SD_Sales.length-1].Date}`:"Empty"}</span> <br/>
        Price <i class="fas fa-calendar-alt"></i><br/> <span  className="labelecondary">{props.SD_Sales.length>2?`${props.SD_Sales[props.SD_Sales.length-1].price}ETH`:"Empty"}</span> <br/>
        Address <i class="fas fa-calendar-alt"></i><br/> <span  className="labelecondary">{props.SD_Sales.length>2?`${props.SD_Sales[props.SD_Sales.length-1].address}`:"Empty"}</span>
       </p>
     
    
       </div>

       <div className="Earliest_Stats_Column2">
        <h4 className="label">IN</h4>
     
      <p className="Earliest_Stats_grid" >
        
       Name <i class="fas fa-dice-d6"></i> <br/> <span  className="labelecondary"> { props.received.name?`${props.received.name}`:"Empty"}</span> <br/> Date <i class="fas fa-calendar-alt"></i>   <br/>
       <span  className="labelecondary">{props.received.date?`${props.received.date }`:"Empty"} </span>  
      </p>


    

        <h4 className="label">OUT</h4>

      <p  className="Earliest_Stats_grid">
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


      <h4 className="header">Recent NFTS </h4> 

      <div className="Account_Latest_Column1">


      <h4 className="label Buys-header">Buys</h4>

 <div className="Account_Latest_Buys"> 
      {props.immedateBuys.length>2?

      
       
        props.immedateBuys.map((item,i)=>{
          return(

          
          <p className="Latest_Stats_grid" key={i} >        
       Name <i class="fas fa-dice-d6"></i> <br/><span  className="labelecondary"> {`${item.asset.collection.name}`}</span>
      
      <br/> Date <i class="fas fa-calendar-alt"></i><br/> <span  className="labelecondary">{`${item.Date}`}</span> <br/>
      Price <i class="fas fa-calendar-alt"></i><br/> <span  className="labelecondary">{`${item.price}`}ETH</span>
      </p>
        )})
        

       





     :<p className="Latest_Stats_grid"><span  className="labelPrimary"> Name <i class="fas fa-dice-d6"></i></span><br/>Empty <br/><span  className="labelPrimary"> Token Address <i class="fas fa-file-alt"></i></span> <br/>Empty
        <br/><span  className="labelPrimary"> Date  <i class="fas fa-calendar-alt"></i> </span>  <br/>Empty
        </p>}

</div>
     
      

<h4 className="label Sells-header">Sells</h4>

<div className="Account_Latest_Sales"> 


      {props.immediateSales.length>2?

      
       
props.immediateSales.map((item,i)=>{
          return(

          
          <p className="Latest_Stats_grid" key={i} >        
       Name <i class="fas fa-dice-d6"></i> <br/><span  className="labelecondary"> {`${item.asset.collection.name}`}</span>
      
      <br/> Date <i class="fas fa-calendar-alt"></i><br/> <span  className="labelecondary">{`${item.Date}`}</span> <br/>
      Price <i class="fas fa-calendar-alt"></i><br/> <span  className="labelecondary">{`${item.price}ETH`}</span>
      </p>
        )})
        

       





     :<p className="Latest_Stats_grid"><span  className="labelPrimary"> Name <i class="fas fa-dice-d6"></i></span><br/>Empty <br/><span  className="labelPrimary"> Token Address <i class="fas fa-file-alt"></i></span> <br/>Empty
     <br/><span  className="labelPrimary"> Date  <i class="fas fa-calendar-alt"></i> </span>  <br/>Empty
     </p>}

</div>
     
      
      

      
        
     </div>

          
     <div className="Account_Latest_Column2">
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

      

      
     
      <h4 className="label Sells-header">OUT</h4>

      
      <div className="Account_Latest_Out" > 
        <span  className="labelecondary">  { props.latestTransferred.length>2?
        
        props.latestTransferred.map((LT,i)=>{
          return(<p className="Latest_Stats_grid" key={i}><span  className="labelPrimary"> Name <i class="fas fa-dice-d6"></i></span><br/>{LT.name} <br/><span  className="labelPrimary"> Token Address <i class="fas fa-file-alt"></i></span> <br/>{LT.id}
          <br/><span  className="labelPrimary"> Date <i class="fas fa-calendar-alt"></i> </span>   <br/>{LT.date}
          </p>) 
        }):<p className="Latest_Stats_grid"><span  className="labelPrimary"> Name <i class="fas fa-dice-d6"></i></span><br/>Empty <br/><span  className="labelPrimary"> Token Address <i class="fas fa-file-alt"></i></span> <br/>Empty
        <br/><span  className="labelPrimary"> Date  <i class="fas fa-calendar-alt"></i> </span>  <br/>Empty
        </p>}</span>
      
      </div>

     
    
      </div>
      </div>

    </div>

      
      </div>

      <div className={props.NFTS.length>2?"Account_Recent_Transactions container":"Account_Empty_Transactions container"}> 
       <h3 className="label">Current NFTS</h3>
       

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

  );  


 
}


  export default Home;