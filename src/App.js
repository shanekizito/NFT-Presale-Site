import React from 'react'


import Home from '../src/Components/Home'
import {Link , BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from '../src/Components/Navigation'


import { useState } from 'react'

import '../src/Components/Dashboard.css'



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










 
export  default function App () {

  const [ID,setID]= useState(0);


  const [NFTS, setNFTS] = useState([]);
  
 const [testArray, seTestArrayy] = useState([]);


  const[transfer,setTransfer]=useState(0);

 const [received,setReceived]=useState('');

 const [latestTransferred,setLatestTransferred]=useState(0);

 const [latestReceived,setLatestReceived]=useState('');

 const [sixtyDayTo,setSixtyDayTo]=useState(0);

  const [sixtyDayFrom,setSixtyDayFrom]=useState(0);

  const [ethereumBalance,setEthereumBalance]=useState(0);

  const [assetAmount,setAssetAmount]=useState(0);



  const [account_period,setAccountPeriod]=useState(0);

  const [NFT_Sale,setNFT_Sale]=useState([]);

  const [SD_NFT_Sale,setSD_NFT_Sale]=useState([]);

  const [SD_Sales,setSD_Sales]=useState([]);

  const [SD_Buys,setSD_Buys]=useState([]); 


  const [immediateSales,setImmediateSales]=useState([]);

  const [immedateBuys,setImmediateBuys]=useState([]); 

  const [csvFile, setCsvFile] = useState();
  const [csvArray, setCsvArray] = useState([]);

 
  



async function LoadStats(ID){

 
  const options = {method: 'GET'};

  const client = new ApolloClient({
    uri: 'https://api.thegraph.com/subgraphs/name/amxx/eip721-subgraph',
    cache: new InMemoryCache()
  });




const allNFTS =  gql`
      query Accounts($ID: String!) {
        account(id:$ID){
         id
         tokens{
    registry{
      name
      id }
      
    }
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

 
  


 fetch('https://api.etherscan.io/api?module=account&action=balance&address='+`${ID}` +'&tag=latest', options)
  .then(response => response.json())
  .then(response => setEthereumBalance(((parseInt(response.result))/1000000000000000000)).toFixed(2)) 
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
  




 
  
  fetch('https://api.opensea.io/api/v1/events?account_address=0xd387a6e4e84a6c86bd90c158c6028a58cc8ac459&event_type=successful&only_opensea=false&offset=0&limit=300&occurred_after=1632850162000', options_Event)
    .then(response => response.json())
    .then(response => {
     

      const SD_asset_array=[];
      setSD_NFT_Sale(SD_asset_array) ;
      

      for(var i=0;i<response.asset_events.length;i++){

     
        
        var SD_SingleAsset=
        {
          
          Date:response.asset_events[i].created_date? response.asset_events[i].created_date.slice(0,-16):'Empty',
          price:response.asset_events[i].total_price/1000000000000000000,
          seller: response.asset_events[i].seller!==null?response.asset_events[i].seller.address:"",
          asset: response.asset_events[i].asset,
      
        }
       

        
        SD_asset_array.push(SD_SingleAsset);
   

      

         

          

    }
    

    

   
   
   

  
  }).catch(err => console.error(err));

  if (SD_NFT_Sale.length>2){
    var SD_array_Recent_Sales=[];
    var SD_array_Recent_Buys=[];
    for (var i=0;i<NFT_Sale.length;i++){
      if(SD_NFT_Sale[i].seller==ID){
  
        SD_array_Recent_Sales.push(SD_NFT_Sale[i]);
        
        
      }
      else{
        SD_array_Recent_Buys.push(SD_NFT_Sale[i]);
      }
  
      setSD_Sales(SD_array_Recent_Sales);
      setSD_Buys(SD_array_Recent_Buys);  
      }
    }


console.log(SD_Sales)
    
      


    

    


  fetch('https://api.opensea.io/api/v1/events?account_address=0xd387a6e4e84a6c86bd90c158c6028a58cc8ac459&event_type=successful&only_opensea=false&offset=2000&limit=300', options_Event)
    .then(response => response.json())
    .then(response => {

      
      

      const asset_array=[];
      setNFT_Sale(asset_array) ;
      

      for(var i=0;i<response.asset_events.length;i++){

     
        
        var SingleAsset=
        {
          
          Date:response.asset_events[i].created_date? response.asset_events[i].created_date.slice(0,-16):'Empty',
          price:response.asset_events[i].total_price/1000000000000000000,
          seller: response.asset_events[i].seller!==null?response.asset_events[i].seller.address:"",
          asset: response.asset_events[i].asset,
      
        }
       

        
         asset_array.push(SingleAsset);
   

      

         

          

    }
    

    

   
   
   

  
  }).catch(err => console.error(err));


const  RecentNFTS= client
.query({
  query:CurrentNFTSschema,
  variables: {
    ID:`"${ID}"`,
  }
})
.then
( result =>{



 console.log(result);


 


}

)










 

console.log(NFT_Sale);


if (NFT_Sale.length>2){
  var array_Recent_Sales=[];
  var array_Recent_Buys=[];
  for (var i=0;i<NFT_Sale.length;i++){
    if(NFT_Sale[i].seller==ID){

      array_Recent_Sales.push(NFT_Sale[i]);
      
      

    }
    else{
      array_Recent_Buys.push(NFT_Sale[i]);
    }

    setImmediateSales(array_Recent_Sales);
    setImmediateBuys(array_Recent_Buys);  
    }
  }







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


    setNFTS(result.data.account.tokens);
  
   
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
          Id:result.data.account.transfersTo[i].token.registry.id,
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

    

  
    
  

   
  

const handleChange = e => {

  if(e.target.value!==''){
 
  
 
  console.log(ethereumBalance);

}};

 

  

    const upload= 
  
{

 NFTS_upload: NFTS,

 transfer_upload: transfer,

 received_upload:  received,

 latestTransferred_upload:  latestTransferred, 

 latestReceived_upload:  latestReceived,

 sixtyDayTo_upload: sixtyDayTo,

 sixtyDayFrom_upload:  sixtyDayFrom, 

 ethereumBalance_upload:  ethereumBalance, 

 assetAmount_upload:  assetAmount, 

 

 account_period_upload: account_period,

 NFT_Sale_upload:  NFT_Sale,

 NFT_Sale_upload:  NFT_Sale,
 
 SD_NFT_Sale_upload: SD_NFT_Sale, 

 SD_Sales_upload: SD_Sales, 

 SD_Buys_upload: SD_Buys,  


 immediateSales_upload: immediateSales, 

 immedateBuys_upload: immedateBuys, 


 username_upload:  username,


};
    if(upload.immedateBuys_upload.length>2){



      axios.post("http://localhost:5000/stats/add", upload)
      .then(res => console.log(res.data) );
     
      
     }
  






    }














  
   
    // [{name: "", age: 0, rank: ""},{name: "", age: 0, rank: ""}]



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



    }



    const UploadFile=()=>{
        for(let i=0; i<csvArray.length; i++){
             
      
    
        const AddressFile= {
    
                Csv_address_upload:csvArray[i].address,   
                Csv_username_upload:csvArray[i].name,
                
            }
    
            axios.post("http://localhost:5000/wallet/add", AddressFile)
            .then(res => console.log(res.data) );
    
    }
    

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


function handleRefresh(){
  return "hi"
}

function handleChange(){
  return "hi"
}



const handleClick=(e) => {

  e.preventDefault()

   if (e.target.className=="address_upload"){

      setID(e.target.innerHTML);
      console.log(ID);
       

      if(ID==e.target.innerHTML)
       LoadStats(ID);
      

   }

 
       

   
  
  }

    

    return(

        <>


      <Router>

        <Navigation />

        <form id='csv-form'>
            <h4>Upload files</h4>
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
            {csvArray.length>0 ? 
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
                                <tr  key={i}

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
                    if(csvFile)UploadFile()
                }}
            >
                Upload Addresses
            </button>
            </> : null}



        </form>

       {()=>{
         if(ID!==0){
           return <Home
           
           
           ID={ID}
          
           
          handleChange={handleChange()}
           
           ethereumBalance={ethereumBalance}
           
           assetAmount={assetAmount}
           
           account_period={account_period}
           
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
           
           NFTS={NFTS}/>
         }
       }}
        
          <Routes>
          <Route path='/' exact element={<Home
         
  
         ID={ID}
          
           
          handleChange={handleChange()}
           
           ethereumBalance={ethereumBalance}
           
           assetAmount={assetAmount}
           
           account_period={account_period}
           
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
           
           NFTS={NFTS}

           

           

       
          
          />} />

             
          
          </Routes>
      </Router>
    </>
  









  

    );
          }
