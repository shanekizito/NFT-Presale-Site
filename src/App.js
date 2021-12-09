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


  const [SKIP,setSKIP]=useState(100);

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

  

  const [Username,setUsername]=useState('name');

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
      query Accounts($ID: String! ) {
        account(id:$ID ){
         id
         tokens(skip:$SKIP){
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




const handleChange = e => {
  if(e.target.value!==''){ 
  console.log(ethereumBalance);
}};




const handleClick=(e) => {

  e.preventDefault()

   if (e.target.className=="address_upload"){

  setID(e.target.innerHTML);
    
  LoadStats(e.target.innerHTML);

}

    var newUser = {    
    ID:e.target.innerHTML,
    Username:Username,                    
    duration_upload:account_period,
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





 axios.post("http://localhost:5000/stats/add",newUser).then(res=>{
   return res.data.insertedId;
 }).then(res=>{


  var res = res.replace(/^"|"$/g, )

  console.log(res);
  axios.get("http://localhost:5000/stats/get/"+res).then(response => console.log(response.data))
 })
 



 

 

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

       {
        ID!==0?
            (<Home
           
           
           ID={ID}
          
           
          handleChange={handleChange}
           
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
            ):null
       }
        
          <Routes>
          <Route path='/home' exact element={<Home
         
  
         ID={ID}
          
           
          handleChange={handleChange}
           
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
