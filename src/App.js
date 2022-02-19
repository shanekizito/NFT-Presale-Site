import React, { useEffect } from 'react'
import NavBar from '../src/Components/NavBar'
import Dashboard from '../src/Components/Dashboard'
import { useState } from 'react'
import '../src/Components/Dashboard.css'
import '../src/Components/NavBar.css'
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

import { parse } from 'graphql';




const Address="0x91cdb6dda7ea6391e894152023247877e81dcc41";

 
export  default function App () {

  const [ID,setID]= useState(0);
  const [Volume,setVolume]= useState(0);
  const [liquidity,setLiquidity]=useState(0);
  const [Token0Price,setToken0Price]=useState(0);
  const [DayVolume,setDayVolume]=useState(0);
  const [DayLiquidity,setDayLiquidity]=useState(0);
  const [WalletPortfolio,setWalletPortfolio]=useState([])
  const [Token1Price,setToken1Price]=useState(0);
  const [TokenHolders,setTokenHolders]=useState(0);
  const [vol,setVol]=useState(0);
  const [treasuryWallet,setTreasuryWallet]=useState(0);
  const [AvaxPrice, setAvaxPrice]=useState(0);
  const [HoursVolume,setHoursVolume]=useState(0);


 useEffect(()=>{ 

   try{
    async function LoadStats(address) {
  
      const options = {method: 'GET'};
    
      const client = new ApolloClient({
        uri: 'https://api.thegraph.com/subgraphs/name/traderjoe-xyz/exchange',
        cache: new InMemoryCache()
      });
      const headers = {
        'Content-Type': 'application/json',
        
      }
      axios.get('https://api.zapper.fi/v1/balances-v3?addresses%5B%5D=0xfb4994bc10892027f1f6df5c5e982112d9714e66&api_key=96e0cc51-a62e-42ca-acee-910ea7d2a241').then(res=>{
        return res.data;
      }).then(response=>{
        
        axios.get('https://api.covalenthq.com/v1/43114/tokens/0x6293Bd9D427ba0bFE40641F6fb9df061aea1e5bd/token_holders/?quote-currency=USD&format=JSON&block-height=11038903&page-number=0&page-size=300&key=ckey_6e2471ab4103439280beac7b031').then(res=>setTokenHolders(res.data.data.items.length));

        var resString = response.split("},");
        
        var d=resString[6];
        var f = d.replace(/"/g, " ");
        var b=f.split(':{');
        var h=b[2].split(',')
        var avax=Number(h[3].split(':')[1]);
        var avaxImage=b[3].split(',')[2].split('[')[1].split(']')[0];
        setAvaxPrice(avax)
        const avaxData = {name:'AVAX' , balance:avax,image:avaxImage}

        var u=resString[10];
        var v = u.replace(/"/g, " ");
        var w=v.split(':{');
        var x=w[1].split(',')
        var usdc=Number(x[3].split(':')[1]);
        var usdcImage=w[2].split(',')[2].split(':[')[1].split(']')[0];
        
        const usdcData={name:'USDC' , balance:usdc,image:usdcImage}


        var e=resString[14];
        var f = e.replace(/"/g, " ");
        var g=f.split(':{');
        var h=g[1].split(',')
        var wbtc= Number(h[3].split(':')[1]);
        var WbtcImage=g[2].split(',')[2].split(':[')[1].split(']')[0];
        const WbtcData={name:'WBTC' ,balance:wbtc,image:WbtcImage}


        var portfolioBalance=wbtc+usdc+avax;

        const portfolio=[avaxData,usdcData,WbtcData];

        setWalletPortfolio(portfolio);
     
        console.log(WalletPortfolio)

        setTreasuryWallet(portfolioBalance.toFixed(0));
      })
    
    
    
     
    const allNFTS =  gql`
         query LiquidityPosition($Address: String!){
          liquidityPositions(where: {pair:$Address}) {
            pair {
              volumeToken1
            dayData{
              volumeToken0}
            
              id
              name
            token0{
              symbol
              dayData{
              priceUSD
              volumeUSD
    
              liquidityUSD
              }
              volumeUSD
            }
              token1Price
              reserve0
              reserve1
              reserveUSD 
            }
            liquidityTokenBalance
            
          }
         }
    
       
    
    ` ;
    
    const demo= client
        .query({
          query:allNFTS,
          variables: {
          Address: Address,    
          }
        })
        .then
        ( result =>{  try {  
        setVolume(Number(result.data.liquidityPositions[0].pair.volumeToken1).toFixed())
        setToken0Price(Number(result.data.liquidityPositions[0].pair.token0.dayData[0].priceUSD).toFixed(5))
        setDayVolume(Number(result.data.liquidityPositions[0].pair.token0.dayData[0].volumeUSD).toFixed())
        setDayLiquidity(Number(result.data.liquidityPositions[0].pair.token0.dayData[0].liquidityUSD).toFixed())
        }

        catch(err){
        console.log(err)

        }});
   
    
      }
    
      LoadStats(Address);
 
 
  }

 catch(err){

  console.log(err)
}


if(Volume>0){
  setHoursVolume(Volume*84)
  console.log(Volume*84);

}

},[0]);


function DashboardFunc(){
  
  return (
    <
  Dashboard Vol={Volume} Liquidity={DayLiquidity} Price={Token0Price}
  dayVolume={DayVolume} dayLiquidity={DayLiquidity}
  treasuryWallet={treasuryWallet}
  TotalHolders={TokenHolders}
  />)
}

 function Investment(WalletPortfolio) {
 
  return (
      <div className="coin-Array">
        <p className="Asset-Holding">Asset </p>
        <p className="Invested-Capital">Balance</p>
      {WalletPortfolio.map((coin) => (
          <div className="coin-investment">
               <img src= {coin.image}/>
               <p className="coin-name">{coin.name}</p>
               <p>$ {coin.balance.toFixed()}</p>
          </div>
      )
         
      )}</div>)}

       
          return(
            <>      
        <Router>   
        <NavBar/>
          <Routes>
          <Route path='/' exact element={DashboardFunc()} />
          <Route path='/Investment' element={Investment(WalletPortfolio)}/>
          </Routes>
        </Router>   
            </>
        
              );
    }
