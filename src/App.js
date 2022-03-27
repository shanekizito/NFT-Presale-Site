<<<<<<< HEAD
import React from 'react'
import Home from '../src/Components/Home'
import {Link , BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from '../src/Components/Navigation'
import Homepage from '../src/Components/Homepage';
import Follow from '../src/Components/Follow';
import Login from '../src/Components/login';
import axios from 'axios';
import Password from '../src/Components/password';
import './App.css';
import {useState} from 'react';



export  default function App () {
  const [user, setUser] = useState({});

  const updateUser = (data) => {
    setUser((prevuser) => ({ ...prevuser, ...data }));
    
  };

  console.log(user);
  
  const handleCallback=(childData) =>{
    
    updateUser(childData);
    console.log(user);
  }

    return(
      <>
      <Router>
      
       <Routes>
       <Route path='/home'  element={<Homepage  />} />
       <Route path='/'  element={<Login user={user} updateUser={updateUser}/>} />
       <Route path='/sign-in'  element={<Password user={user} updateUser={updateUser}/>} />
       </Routes>
       </Router>
   
      </>
    );
}
=======
import {React,useEffect }from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './Components/login';
import Navigation from './Components/Navigation';
import Launchpad from './Components/Launchpad';

import Collections from './Components/Collections';
import Home from './Components/Home'
import './shimmer.scss';
import { useState } from 'react'
import '../src/Components/Dashboard.css'
import HomeLoading from './Components/HomeLoading';
import Homepage from './Components/Homepage';
import axios from 'axios';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

import { parse } from 'graphql';

const username="User";

const App = () => {

  const [ID,setID]= useState(0);
  
  const [SKIP,setSKIP]=useState(100);

  const [NFTS, setNFTS] = useState([]);
  
 const [testArray, seTestArrayy] = useState([]);


  const[transfer,setTransfer]=useState(0);

 const [received,setReceived]=useState('');

 const [latestTransferred,setLatestTransferred]=useState(0);

 const [latestReceived,setLatestReceived]=useState('');

 const [sixtyDayTo,setSixtyDayTo]=useState(0);

  const [sixtyDayFrom,setSixtyDayFrom]=useState(0);

  const [ethereumBalance,setEthereumBalance]=useState('');

  const [assetAmount,setAssetAmount]=useState(0);

  const [account_period,setAccountPeriod]=useState(0);

  const [NFT_Sale,setNFT_Sale]=useState([]);

  const [SD_NFT_Sale,setSD_NFT_Sale]=useState([]);

  const [SD_Sales,setSD_Sales]=useState([]);

  const [SD_Buys,setSD_Buys]=useState([]);

  const [Username,setUsername]=useState('name');

  const [immediateSales,setImmediateSales]=useState([]);

  const [immedateBuys,setImmediateBuys]=useState([]);

  const [holdTime,setHoldtime]=useState([]);

  const [maxAverageHoldDuration,setMaxAverageHoldDuration]=useState(0);

  const [maxAverageHoldDuration2,setMaxAverageHoldDuration2]=useState(0);


  const [csvFile, setCsvFile] = useState();
  
  const [csvArray, setCsvArray] = useState([]);

  const [loading,setLoading]=useState(0);

  const [most_expensive_asset,setMost_expensive_assets]=useState({});
 

  
useEffect(() => {

var test= window.location.pathname.split("/");
setID(test[1]);

function loadTable(){
  if(window.location.pathname==("/"+ID)){
    var id=ID;
    
    axios.get("https://statsnft.herokuapp.com/wallet/get/"+id).then(response => {
    
    if(response.data){
      setCsvArray(response.data.address);
  
    }
   
    });
  
  }
  
  else{
   
    console.log("error",window.location.pathname);
    console.log(ID,"IDERROR");
  }
}

loadTable();
    
},[1]);







  const  Main= () => {

   async function LoadStats(ID){
    
    const options = {method: 'GET'};
  
    const client = new ApolloClient({
      uri: 'https://api.thegraph.com/subgraphs/name/amxx/eip721-subgraph',
      cache: new InMemoryCache()
    });
  

   
  const allNFTS =  gql`
        query Accounts($ID: String! ) {
          account(id:$ID ){
           id
           tokens(skip:$SKIP){
      registry{
        name
        id }
        
      }
          transfersTo(orderBy:timestamp orderDirection:asc){
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
  
   
    
  const  RecentNFTS= client
  .query({
    query:CurrentNFTSschema,
    variables: {
      ID:`"${ID}"`,
    }
  })
  .then
  ( result =>{
  
  
  }
  
  )
  
  
  
  
     const demo= client
      .query({
        query:allNFTS,
        variables: {
          ID: ID,
        
        }
      })
      .then
      ( result =>{  try {
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
          
      );
      
    
        var newNFTS=result.data.account.tokens;
        console.log(newNFTS);
        setNFTS(newNFTS)
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
          for(i=0;i<result.data.account.transfersTo.length;i++){
        
          const L_r={
            name:result.data.account.transfersTo[i].token.registry.name,
            id:result.data.account.transfersTo[i].token.registry.id,
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
  
  
  
          
        }
      catch(e){console.log(e)}})
  
      if(latestReceived[0].date &&received.date){
        const Account_Active=(new Date(latestReceived[0].date).getTime()-new Date(received.date).getTime())/(1000*60*60*24);
  
      setAccountPeriod(Account_Active);
  

      }
      
    }
  

      const processCSV = (str, delim=',') => {
          const headers = str.slice(0,str.indexOf('\n')).split(delim);
          const rows = str.slice(str.indexOf('\n')+1).split('\n');
          const newArray = rows.map( row => {
              const values = row.split(delim);
              const eachObject = headers.reduce((obj, header, i) => {
                  obj[header] = values[i];
                  return obj;
              }, {})
              return eachObject;
          })
          setCsvArray(newArray)

          const AddressFile= {  
            Csv_address_upload:newArray,   
            Csv_username_upload:ID,
        }
 
        axios.post("https://statsnft.herokuapp.com/wallet/add", AddressFile)
        .then(res => {
          
          
          console.log(res.data)} );
  
      }
     
     
      const UploadFile=(ID)=>{    
          
       }

      
      const submit = () => {
          const file = csvFile;
          const reader = new FileReader();
          reader.onload = function(e) {
              const text = e.target.result;
              console.log(text);
              processCSV(text)
          }
  
          reader.readAsText(file);
          
        
      }
  
  
      function uploadCsv(e){
  
          e.preventDefault();
  
         console.log(e.target) 
  
  }
  
  
  
  
  const handleChange = e => {
    if(e.target.value!==''){ 
    console.log(ethereumBalance);
  }};
  
  
  
  
  const handleClick=(e) => {
  
    e.preventDefault()
  
  
    setImmediateSales([]);
      setSD_NFT_Sale([]);
      setSD_Sales([]);
      setSD_Buys([]);
      setSD_Buys([]);
      setEthereumBalance(0);
      //setAccountPeriod(0);
      setImmediateSales([]);
      setImmediateBuys([]);
      setHoldtime(0);
      setNFT_Sale(0);
      setMaxAverageHoldDuration(0);
      setMaxAverageHoldDuration2(0);
  
     if (e.target.className=="address_upload"){
    
  
    setLoading(1);
  
  
    LoadStats(e.target.innerHTML);
  
  
    var newUser = { 
      ID:e.target.innerHTML,
      userNo_upload:ID,
      Username:Username,                    
      assetAmount_upload:assetAmount,
      NFT_stats: {
      latestTransferred_upload:latestTransferred,  
      latestReceived_upload:latestReceived,
      sixtyDayTo_upload:sixtyDayTo,
      sixtyDayFrom_upload:sixtyDayFrom,
      received_upload:received,
      transfer_upload:transfer,
    }
  };
  
  
   axios.post("https://statsnft.herokuapp.com/stats/add",newUser).then(res=>{
     return res.data.insertedId;
   }).then(res=>{
  
    var res = res.replace(/^"|"$/g, );
  
    console.log(res);
  
    axios.get("https://statsnft.herokuapp.com/stats/get/"+res).then(response => {
      console.log(response);
      setMost_expensive_assets(response.data.NFT_stats.most_expensive_assets);
      setSD_NFT_Sale(response.data.NFT_stats.NFT_Sale);
      setSD_Sales(response.data.NFT_stats.SD_Sales);
      setSD_Buys(response.data.NFT_stats.SD_Buys);
      setSD_Buys(response.data.NFT_stats.SD_Buys);
      setEthereumBalance(response.data.ethereumBalance);
      setImmediateSales(response.data.NFT_stats.Sales);
      setImmediateBuys(response.data.NFT_stats.Buys);
      setHoldtime(response.data.HoldDuration);
      setNFT_Sale(response.data.NFT_stats.NFT_Sale);
      setMaxAverageHoldDuration(response.data.NFT_stats.maxAverageHoldDuration);
      setMaxAverageHoldDuration2(response.data.NFT_stats.maxAverageHoldDuration2);
      setLoading(0);
      
    });
  

  });
  
  
  }
   
  
    }

    
          
     return(
  
        <>
          <form id='csv-form'>
              <h3>Submit .csv address file </h3>
              <input className="csv-input" 
              type='file'
               
                  accept='.csv'
                  id='csvFile'
                  onChange={(e) => {
                      setCsvFile(e.target.files[0])
                  }}
              >
              </input>
              <br/>

              <button className="csv-button" 
                  onClick={(e) => {
                      e.preventDefault()
                      if(csvFile)submit()
                      
                        
                     
                  }}
              >
                  Submit
              </button>
              <br/>
              <br/>

              {csvArray.length>0? 
  
              <>
                  <table className="table container">
                      <thead>
                          <th>Index</th>
                          <th>Name</th>
                          <th>Address</th>
                      </thead>
                      <tbody>

                          {
                              csvArray.map((item, i) => (
                               
                                <tr className="address-row" key={i}
                                  onClick={handleClick}
                                  >
                                      <td>{i+1}</td>
                                      <td>{item.name}</td>
                                      <td className="address_upload">{item.address}</td> 
                                  </tr>
                                 
                              ))
  
                          }
                      </tbody>
                  </table>
  
                  <button className="upload-button" 
                  onClick={(e) => {
                      e.preventDefault()
                      
                  }}
              >
                  Upload Addresses
              </button>
              </> : null}
          </form>
    
        {loading==1?<HomeLoading/>:()=>{
       return console.log(immediateSales,"ImediateSales");
        }}

          
         {
          immediateSales.length>1?
              (<Home
             ID={ID}

            handleChange={handleChange}
             
             ethereumBalance={ethereumBalance}
  
             expensive_assets={most_expensive_asset}
             
             assetAmount={assetAmount}
             
             account_period={account_period}
             
             
             sixtyDayTo={sixtyDayTo}
             
             sixtyDayFrom={sixtyDayFrom}
             
             SD_Buys={SD_Buys}
             
             
             SD_Sales={SD_Sales}
             
             received={received}
             
             transfer={transfer}
             
             immedateBuys={immedateBuys}
             
             latestReceived={latestReceived}
             
             latestTransferred={latestTransferred}
  
             immediateSales={immediateSales}
  
             SD_Buys={SD_Buys}
  
             maxAverageHoldDuration={maxAverageHoldDuration}
  
             maxAverageHoldDuration2={maxAverageHoldDuration2}
             
             NFTS={NFTS}/>
              ):null
         }
          
             
      </>
    
      );
  }

  
  const handle_App_PassedId = (userId) => {
  
  
    setID(userId);
    console.log("App_PassedId",userId);
   }



   return(

  <BrowserRouter>
  <div className="overlay">
  <Navigation userNo={ID}/>
      <Routes>
        <Route path="/:id"  element={<Main /> } exact={true}/>
        <Route path="/collections/get" element={<Collections/> } />
        <Route path="/Launchpad"  element={<Launchpad/> } />
        <Route path="/"  element={<Homepage/> } />
        <Route path="/Home"  element={<Homepage/> } />
        <Route path="/signUp"  element={<Login App_receivedID={handle_App_PassedId}/> } exact={true}/>
        <Route path="/login"  element={<Login App_receivedID={handle_App_PassedId}/> } exact={true}/>
       </Routes>
       </div>
      
  </BrowserRouter>
  )

};


export default App;
>>>>>>> 15f129ef73fd751b1d934993ce5ebe894c11839d
