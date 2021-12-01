import React from 'react';
import { useState } from 'react';
import './App.css';
import {Link , BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";
import { parse } from 'graphql';




export function SetBoughtDate(){
  const [NFTS,setNFTS]=useState([]);

  const[transfer,setTransfer]=useState(0);

 const [received,setReceived]=useState('');

 const [latestTransferred,setLatestTransferred]=useState(0);

 const [latestReceived,setLatestReceived]=useState('');

 const [sixtyDayTo,setSixtyDayTo]=useState(0);

  const [sixtyDayFrom,setSixtyDayFrom]=useState(0);

  const [ethereumBalance,setEthereumBalance]=useState(0);

  const [assetAmount,setAssetAmount]=useState(0);

  const [ID,setID]=useState(0);

  const [account_period,setAccountPeriod]=useState(0);

  const [NFT_Sale,setNFT_Sale]=useState([]);

  const [recentSale,setRecentSale]=useState([]);

  const [earliestSale,setEarliestSale]=useState([]);


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


 

  const client = new ApolloClient({
    uri: 'https://api.thegraph.com/subgraphs/name/amxx/eip721-subgraph',
    cache: new InMemoryCache()
  });




 
   
 

  





const allNFTS =  gql`
      query Accounts($ID: String!) {
        account(id:$ID){
         id
        transfersTo(orderBy:timestamp){
            token{
                id
                registry{
                id
                     name
                     }
                }
            timestamp
       }
       transfersFrom(orderBy:timestamp orderDirection:asc){
            token{
                id
                registry{
                id
                     name
                     }
                }
            timestamp
       }
     }
   }

` ;


const latestNFT =  gql`
      query Accounts($ID: String!) {
        account(id:$ID){
         id
        transfersTo(orderBy:timestamp orderDirection:desc){
            token{
                id
                registry{
                     name
                     id
                     }
                }
            timestamp
       }
       transfersFrom(orderBy:timestamp orderDirection:desc){
            token{
                id
                registry{
                id
                     name
                     }
                }
            timestamp
       }
     }


   }

` ;


const CurrentNFTSschema =  gql`

query Accounts($ID: String!) {
 account(id:$ID){
  tokens{
    registry{
      name
      id
      
    }
    uri

   }
 }
  
}


`
;




  
async function GetAllNFTS(ID){
  

  
  const options = {method: 'GET'};


 fetch('https://api.etherscan.io/api?module=account&action=balance&address='+`${ID}` +'&tag=latest', options)
  .then(response => response.json())
  .then(response => setEthereumBalance((parseInt(response.result)/1000000000000000000).toFixed(2))) 
  .catch(err => console.error(err));



  const Options_Asset = {method: 'GET'};

  fetch('https://api.opensea.io/api/v1/assets?owner='+ `${ID}`+'&order_direction=desc&offset=0&limit=50', Options_Asset)
  .then(response => response.json())
  .then(response => setAssetAmount(response.assets.length))
  .catch(err => console.error(err));

 
  const options_Event = {
    method: 'GET',
    headers: {Accept: 'application/json', 'X-API-KEY': '2d3ddf54946e4569b7cd1df8daca6e4a'}
  };
  
  fetch('https://api.opensea.io/api/v1/events?account_address=0xd387a6e4e84a6c86bd90c158c6028a58cc8ac459&event_type=successful&only_opensea=false&offset=1000&limit=300', options_Event)
    .then(response => response.json())
    .then(response => {

      
      console.log(response.asset_events.length);

      const asset_array=[];

      for(var i=0;i<response.asset_events.length;i++){

     
        
        var SingleAsset={
         
          Date: response.asset_events[i].created_date.slice(0,-16),  
          Asset: response.asset_events[i].asset,

          price:response.asset_events[i].total_price/1000000000000000000,
          buy:response.asset_events[i].transaction.to_account.address?response.asset_events[i].transaction.to_account.address:"",
          seller: response.asset_events[i].seller.address?response.asset_events[i].seller.address:"",
          buyer:response.asset_events[i].winner_account.address,
         
        }

        
         asset_array.push(SingleAsset);
   

      



         

    }


   



    

    setNFT_Sale(asset_array)
   

  
  }).catch(err => console.error(err));



  const Arranged_Buys=NFT_Sale.sort(function(a, b) {
    return new Date(b.Date) - new Date(a.Date);
  });


  setRecentSale(Arranged_Buys[0]);
  setEarliestSale(Arranged_Buys[Arranged_Buys.length-1]);

console.log(NFT_Sale);



  


   const  RecentNFTS= client
   .query({
     query:CurrentNFTSschema,
     variables: {
       ID: ID,
     }
   })
   .then
   ( result =>{try {
   ;
    
    setNFTS(
      result.data.account.tokens
     
      
      );
  


   }
 
   catch(e){console.log(e+'error')}})
 

 


    const demo= client
    .query({
      query:allNFTS,
      variables: {
        ID: ID,
      }
    })
    .then
    ( result =>{try{
  
      setTransfer(
        {
          name:result.data.account.transfersTo[0].token.registry.name,
          id:result.data.account.transfersTo[0].token.registry.id,
          date:new Date(result.data.account.transfersTo[0].timestamp * 1000).toLocaleDateString()
        }
        
      )



      setReceived(

        {

        
        name:result.data.account.transfersFrom[0].token.registry.name,
        id:result.data.account.transfersFrom[0].token.registry.id,
        date:new Date(result.data.account.transfersFrom[0].timestamp * 1000).toLocaleDateString()
        
        }
        
      
  
    )
  
   
    }
  
    catch(e){console.log(e)}})
  

    


    const latestFetch= client
    .query({
      query:latestNFT,
      variables: {
        ID: ID,
      }
    })
    .then
    ( result =>{try{
     

        
         let LR_array=[];
         let LT_array=[];
        for(i=0;i<5;i++){
        

        const L_r={
          name:result.data.account.transfersTo[i].token.registry.name,
          ID:result.data.account.transfersTo[i].token.registry.id,
          date:new Date(result.data.account.transfersTo[i].timestamp * 1000).toLocaleDateString(),
          token:result.data.account.transfersTo[i].token
        }

        LR_array.push(L_r);

        const L_T={
          name:result.data.account.transfersFrom[i].token.registry.name,
          id:result.data.account.transfersFrom[i].token.registry.id,
          date:new Date(result.data.account.transfersFrom[i].timestamp * 1000).toLocaleDateString()

        }
         
        LT_array.push(L_T);


       
      
      
      }

         setLatestReceived(LR_array);
         setLatestTransferred(LT_array);      
      
  
       var sixtyDaysNftIn=[];
       var sixtyDaysNftOut=[];
       for(var i=0;i<result.data.account.transfersTo.length;i++){
         
      
         if(result.data.account.transfersTo[i].timestamp>1632850162){
           
          
          sixtyDaysNftIn.push(result.data.account.transfersTo[i].id)
         
         }
         

         


      };

      setSixtyDayTo(sixtyDaysNftIn.length);


      for(var i=0;i<result.data.account.transfersFrom.length;i++){
         
      
        if(result.data.account.transfersFrom[i].timestamp>1632850162){
          
         
          sixtyDaysNftOut.push(result.data.account.transfersFrom[i].id)
        
        }
        

        


     };

     setSixtyDayFrom(sixtyDaysNftOut.length);


     var to_array=[]
     var to_loop=result.data.account.transfersTo.length;
     for(var e=0;e<to_loop;e++){
       
      
       var to_NFT={
          name:result.data.account.transfersTo[e].token.registry.name,
          id:result.data.account.transfersTo[e].token.registry.id,
          date:result.data.account.transfersTo[e].timestamp 
       }
       to_array.push(to_NFT)
                
      }


      
      const Account_Active=(new Date(latestReceived[0].date).getTime()-new Date(received.date).getTime())/(1000*60*60*24);
         
      setAccountPeriod(Account_Active)
        

       
       

      }
   
    
  
    catch(e){console.log(e)}})

    

  
    
  };

   
  
 

  

  const handleChange = e => {

    if(e.target.value!==''){
    setID(`${e.target.value}`);
    
    console.log(`"${e.target.value}"`);
    console.log(ethereumBalance);
  
  }};



  
 function handleClick(e){
   e.preventDefault();
   GetAllNFTS(ID);

}

function handleRefresh(e){
  if(ID!==0){
    e.preventDefault();
    GetAllNFTS(ID);
  }

}





 

  
  return (

    <div className="Screen_container">
       <Router>
     <div className="Nav_Bar container">
       <h4 className="Nav_Logo">NFT.</h4>
        <div className="Nav_Links">
          <Link className="Nav_Pages"  to='https://github.com/shanekizito'>Home</Link>
          <Link to='https://github.com/shanekizito'>Dashboard</Link>
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
     </Router>
      <div className="Search_Box container">
        <form>
      <input className="searchInput"type="text" onChange={handleChange} placeholder="Paste Wallet "/>
      <button className="searchButton" type="submit" onClick={handleClick}>Search</button>
     
      </form>
      </div>
      <button className="refreshButton" type="submit" onClick={handleRefresh}>Refresh <span><i class="fas fa-sync"></i> </span></button>
    <div className="Screen_container_inner">
   <div className="Row_zero">
     <div className="Account_Address container">

       <h2 >Wallet Stats</h2>
       <h3 className="label">Account Address</h3>
     <p> {`${ID}`}</p>



     <h3 className="label">Account Balance</h3>
      <h4>{`${ethereumBalance}`}ETH <i class="fab fa-ethereum"></i></h4>
      <h3 className="label">NFTS in Wallet</h3>
     <h4>{`${assetAmount}`}</h4>
     <h3 className="label">Days account active</h3>
     <p> {`${account_period}`}</p>
     
     </div>
     
     
     
     <div className="Account_Earliest_Stats container">
        <h3 className="label">Earliest NFTS</h3>
         
        <h4 className="label">IN</h4>
     
      <p >
        
       Name <i class="fas fa-dice-d6"></i> <br/> <span  className="labelecondary"> { received.name?`${received.name}`:"Empty"}</span> 
      </p>
      <p  >
       Date <i class="fas fa-calendar-alt"></i><br/> <span  className="labelecondary"> {received.date?`${received.date }`:"Empty"}</span>
      </p>

        <h4 className="label">OUT</h4>
      <p >


        
       Name <i class="fas fa-dice-d6"></i> <br/><span  className="labelecondary"> {transfer.name?`${transfer.name}`:"Empty"}</span>
      </p>
     
     <p>
       Date <i class="fas fa-calendar-alt"></i><br/> <span  className="labelecondary">{transfer.date?`${transfer.date}`:"Empty"}</span>
     </p>

     
      
       
      </div>

      </div>


    <div className="Row_one">

     
    

      <div className="Account_Latest_Stats container">
      <h4 className="header">Latest NFTS</h4> 
        <div className="Account_Latest_Column1">

          
       
      <h4 className="label">IN</h4>
      <span  className="labelecondary">  { latestReceived.length>2?
        
        latestReceived.map(LR=>{
          return(<p><span  className="labelPrimary"> Name <i class="fas fa-dice-d6"></i></span><br/>{LR.name} <br/><span  className="labelPrimary"> Token Address <i class="fas fa-file-alt"></i></span> <br/>{LR.ID}
          <br/><span  className="labelPrimary"> Date  <i class="fas fa-calendar-alt"></i> </span>  <br/>{LR.date}
          </p>) 
        }):"Empty"}</span>
      

      </div>
      <div className="Account_Latest_Column2">
      <h4 className="label">OUT</h4>
      
        <span  className="labelecondary">  { latestTransferred.length>2?
        
        latestTransferred.map(LT=>{
          return(<p><span  className="labelPrimary"> Name <i class="fas fa-dice-d6"></i></span><br/>{LT.name} <br/><span  className="labelPrimary"> Token Address <i class="fas fa-file-alt"></i></span> <br/>{LT.id}
          <br/><span  className="labelPrimary"> Date <i class="fas fa-calendar-alt"></i> </span>   <br/>{LT.date}
          </p>) 
        }):"Empty"}</span>
      

     
      </div>
      </div>

    </div>

      <div className="Account_SixtyDay_Averages container">
        <h3 className="label">60 days Averages</h3>
    <p>
    NFTs in<br/>
        {`${sixtyDayTo}`} 
    </p>

    <p>
    NFTs Out <br/>
        {`${sixtyDayFrom}`} 
    </p>
     
     
      </div>
      </div>

      <div className={NFTS.length>2?"Account_Recent_Transactions container":"Account_Empty_Transactions container"}> 
       <h3 className="label">Current NFTS</h3>
       

       {NFTS.length>2?NFTS.map(nft => {
          return (
            <NFT_single
             
            Name={nft.registry.name}
            id={nft.registry.id}
            
            
            />
          )
       }):<h5>None</h5> }
       
      </div>


      
     
    </div>

  )


 
}

 






                  



  export default SetBoughtDate;