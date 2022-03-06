import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';


const Collections = () => {

 const [NFT_Collection, setNFT_Collection] = useState([]);

 useEffect(() => {

    
try {
       const getNFT_Collection = async () => {
        const res = await axios.get("http://localhost:5000/collections/get");
        console.log(res);

        
        setNFT_Collection(res.data.collections);
        console.log(NFT_Collection);
       };
       
       getNFT_Collection(); 
} catch (error) {
    
}


 }, []);    


    return (
       
       <div>
      
        <div className='collections-container'>
        <h1 className='collections-header'>Leaderboards<img src="https://img.icons8.com/emoji/48/000000/bullseye.png"/></h1>
        {NFT_Collection!==null && NFT_Collection.length>0?
        <>
        <table className="collection_table ">
                      <thead>                  
                          <th>collectible</th>
                          <th>Floor Price</th>
                          <th>24hr %</th>
                          <th>Volume(24hr)</th>
                          <th>Sales(24hr)</th>
                          <th>Total volume</th>
                          <th>Total Sales </th>
                      </thead>
                      <tbody>
                          {
                              NFT_Collection.map((item, i) => (
                               
                                <tr className="Collection-row" key={i}
                                  >
                                      <td>{i+1} <span  className="collection-name">{item.Name}</span><i class="fas fa-external-link-alt"></i></td>
                                      <td>{(item.Stats.floor_price).toFixed(1)}<i class="fab fa-ethereum"></i></td>
                                      <td>{(item.Stats.one_day_change.toFixed(2))}</td>
                                      <td>{(item.Stats.one_day_volume).toFixed(0)}<i class="fab fa-ethereum"></i></td>
                                      <td>{(item.Stats.one_day_sales).toFixed(0)}</td>     
                                      <td>{(item.Stats.total_volume.toFixed(0))}<i class="fab fa-ethereum"></i></td>       
                                      <td>{(item.Stats.total_sales).toFixed(0)}</td>
                                  </tr>
        
                              ))
                          }
                      </tbody>
                  </table>
           
                  </> :null}
        </div>
        </div>
    )
}

export default Collections;
