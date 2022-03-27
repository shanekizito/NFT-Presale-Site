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
