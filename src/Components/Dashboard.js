import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import bgImage from './bgImage.JPG'

export default function ImgMediaCard(props) {
  return (
      <div className="dashboard-container">
          <div className="row-1">      
            <div className="dashboard-card"> 
            <h3> Volume </h3>
            <p>$ {props.Vol}</p>
            </div>

            <div className="dashboard-card"> 
            <h3> DWNBD / AVAX Liquidity </h3>
            <p>$ {props.Liquidity}</p>
            </div>

            <div className="dashboard-card"> 
            <h3>Total holders</h3>
            <p>{props.TotalHolders}</p>
            </div>
         
            </div>
           
           

            <div className="row-2">
            <div className="treasury"> 
            <h2>Treasury wallet</h2>
            <i class="fas fa-wallet"></i>
            <h3>$ {props.treasuryWallet}</h3>
            </div>
            <div className="coin-data"> 
            <h2>Token data</h2>
            <i class="fas fa-sort-numeric-up"></i>
           
            <div className="Token-Metrics">
             <div className="Metric-data">
              <h3>Metrics</h3>
              <br/>
              <p>Price</p>
              <br/>
              <p>Volume(24h)</p>
              <br/>
              <p>Liquidity</p>
              <br/>
              
              
             
             <div> 
               
             </div>
              
             </div>
             <div className="Metric-Value">
             <h3>Value</h3>
             <br/>
             <p>${props.Price}</p>
             <br/>
             <p>${props.Vol}</p>
             <br/>
             <p>${props.dayLiquidity}</p>
             <br/>
            
            
             
             </div>
            </div>
            <p></p>
            </div>
            </div>

      </div>
  );
}
