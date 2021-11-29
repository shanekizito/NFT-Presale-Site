import React from 'react';
import { useState } from 'react';
import './App.css'

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

  const[transfer,setTransfer]=useState("");

 const [received,setReceived]=useState("");

 const [latestTransferred,setLatestTransferred]=useState("");

 const [latestReceived,setLatestReceived]=useState("");

 const [sixtyDayTo,setSixtyDayTo]=useState("");

  const [sixtyDayFrom,setSixtyDayFrom]=useState("");

  const [ethereumBalance,setEthereumBalance]=useState("");

  const [assetAmount,setAssetAmount]=useState("");


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


  const ID="0xd387a6e4e84a6c86bd90c158c6028a58cc8ac459";
  const no=Number(ID);
  

  

  const options = {method: 'GET'};




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




  

  

  React.useEffect(() => {


 fetch('https://api.etherscan.io/api?module=account&action=balance&address=0xd387a6e4e84a6c86bd90c158c6028a58cc8ac459&tag=latest', options)
  .then(response => response.json())
  .then(response => setEthereumBalance(((response.result)/1000000000000000000).toFixed(2)))
  .catch(err => console.error(err));



  const Options_Asset = {method: 'GET'};

  fetch('https://api.opensea.io/api/v1/assets?owner=0xd387a6e4e84a6c86bd90c158c6028a58cc8ac459&order_direction=desc&offset=0&limit=50', Options_Asset)
  .then(response => response.json())
  .then(response => setAssetAmount(response.assets.length))
  .catch(err => console.error(err));

  

   const RecentNFTS= client
   .query({
     query:CurrentNFTSschema,
     variables: {
       ID: ID,
     }
   })
   .then
   ( result =>{try {
   console.log(result.data.account.tokens);
    
    setNFTS(
      result.data.account.tokens
     
      
      );
  


   }
 
   catch(e){console.log(e+'error')}})
 

   console.log(NFTS);


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
     
         setLatestReceived( 
        {
          name:result.data.account.transfersTo[0].token.registry.name,
          ID:result.data.account.transfersTo[0].token.registry.id,
          date:new Date(result.data.account.transfersTo[0].timestamp * 1000).toLocaleDateString(),
          token:result.data.account.transfersTo[0].token
        }
      )
        
        
      setLatestTransferred(
        {
          name:result.data.account.transfersFrom[0].token.registry.name,
          id:result.data.account.transfersFrom[0].token.registry.id,
          date:new Date(result.data.account.transfersFrom[0].timestamp * 1000).toLocaleDateString()
        }
      )
        
      
  
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


      var from_array=[]
      var from_loop=result.data.account.transfersFrom.length;
    
      for(var i=0;i<from_loop;i++){
        
       
        var from_NFT= {

          name:result.data.account.transfersFrom[i].token.registry.name,
          id:result.data.account.transfersFrom[i].token.registry.id,
          timestamp: result.data.account.transfersFrom[i].timestamp 
        }
        
        
        from_array.push(from_NFT)
 
       }

       from_array.forEach(element => {
      

        to_array.forEach(element2 => {
          
          if(element.id!==element2.id){
           const hodltime=parseInt(element.timestamp)-parseInt(element2.timestamp);
            
          }
        }

       
       
       )}  );  
         
       
        

       
       

      }
   
    
  
    catch(e){console.log(e)}})

   
  
   

    
   
  }, []);











  
  return (

    <div className="Screen_container">

      <div className="Search_Box container">
      <input class="searchInput"type="text" name="" placeholder="Search for example NFT artist "/>
      <button class="searchButton" type="submit">Search</button>
      </div>
    <div className="Screen_container_inner">
   <div className="Row_zero">
     <div className="Account_Address container">

       <h2 >Account Stats</h2>
       <h3 className="label">Account Address</h3>
     <p> {ID}</p>


     <h3 className="label">Account Balance</h3>
      <h4>{ethereumBalance}ETH <i class="fab fa-ethereum"></i></h4>
      <h3 className="label">NFTS in Wallet</h3>
     <h4>{assetAmount}</h4>
     </div>
     
     
     
     <div className="Account_Earliest_Stats container">
        <h3 className="label">Earliest transfers</h3>
         
        <h4 className="label">IN</h4>
     
      <p >
        
       Name <i class="fas fa-dice-d6"></i> <br/> <span  className="labelecondary"> {`${received.name}`}</span> 
      </p>
      <p  >
       Date <i class="fas fa-calendar-alt"></i><br/> <span  className="labelecondary"> {`${received.date }`}</span>
      </p>

        <h4 className="label">OUT</h4>
      <p >


        
       Name <i class="fas fa-dice-d6"></i> <br/><span  className="labelecondary"> {`${transfer.name}`}</span>
      </p>
     
     <p >
       Date <i class="fas fa-calendar-alt"></i><br/> <span  className="labelecondary">  {`${transfer.date }`}</span>
     </p>

     
      
       
      </div>

      </div>


    <div className="Row_one">

     
    

      <div className="Account_Latest_Stats container">
      <h4 className="header">Latest transfers</h4> 
        <div className="Account_Latest_Column1">

        
       
      <h4 className="label">IN</h4>
      <p >
        Name <i class="fas fa-dice-d6"></i> <br/> 
        <span  className="labelecondary">
        {`${latestReceived.name}`}</span>
      </p>
      <p >
       Token Address <i class="fas fa-file-alt"></i><br/> <span  className="labelecondary">
      {`${latestReceived.ID}`}</span>
      </p>
      <p >Date <i class="fas fa-calendar-alt"></i> <br/><span  className="labelecondary"> {`${latestReceived.date }`}</span></p>

      </div>
      <div className="Account_Latest_Column2">
      <h4 className="label">OUT</h4>
      <p >
        Name <i class="fas fa-dice-d6"></i><br/> 
        <span  className="labelecondary">  {`${latestTransferred.name}`}</span>
      </p>

      <p >
       Token Address <i class="fas fa-file-alt"></i> <br/> 
       <span  className="labelecondary">  {`${latestTransferred.id}`}</span>
      </p>
      <p >Date <i class="fas fa-calendar-alt"></i>  <br/>  <span  className="labelecondary">{`${latestTransferred.date }`}</span></p>
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

      <div className="Account_Recent_Transactions container"> 
       <h3 className="label">Current NFTS</h3>
       
       {NFTS.map(nft => {
          return (
            <NFT_single
            key={nft.registry.id}
            Name={nft.registry.name}
            id={nft.registry.id}
            
            
            />
          )
       })}
       
      </div>


      
     
    </div>

  )


 
}

 






                  



  export default SetBoughtDate;