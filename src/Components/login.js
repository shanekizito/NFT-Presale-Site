<<<<<<< HEAD
import React from 'react'
import mslogo from '../Assets/mslogo.svg'
import axios from 'axios';
import './login.css'
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';
import {Link  } from 'react-router-dom';
import key from '../Assets/key.svg'

const Login = (props) => {
const navigate = useNavigate();
const[formInputs,setFormInputs]=useState({formData:{email:''}});


const handleSubmit=(e)=> {
  e.preventDefault();
  
  props.updateUser(formInputs.formData);
  navigate('/sign-in')
}


const changeHandler=(event)=>{
    const {formData}=formInputs;
    formData[event.target.name]=event.target.value;
    setFormInputs({formData});
}


  return (

    <div>
        <div className="login-card">
        <div className="login-card-header">
        <Link   to='/home'><img class="login-logo" src={mslogo} alt=""/></Link>
           
            <form onSubmit={handleSubmit}>
             <p className="title">Sign in</p>         
             <input type="text" name="email" placeholder="janedoe@gmail.com" id="username" onChange={changeHandler}/>            
             <p>No account? <a href="">Create one!</a></p>
             <p><a href="">can't access your account?</a></p>
            
             <button type="submit" className="btn-next"  > Next </button>
             </form> 
        </div>
        </div>
        <div className="key"><img src={key}/> <p><Link   to='/'>sign-in options</Link></p> </div>          
    </div>
  )
}

export default Login
=======
import React from 'react';
import ReactDOM from 'react-dom';
import SignUpContainer from "./SignUpContainer.js";



import './index.css'

import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles'

import { useState } from 'react'

const theme = createTheme();
 const useStyles = makeStyles((theme) => ({
   background: theme.palette.primary.main,
 }));



const Login = (props) =>{

const [UserID,setUserID] =useState('');

 const handlePassedId = (userId) => {
    setUserID(userId);
  
   }
  
   props.App_receivedID(UserID);  
  

return(

  
  <ThemeProvider theme={theme}>
    <SignUpContainer receivedID={handlePassedId} />
    </ThemeProvider>
);

}

export default Login;
>>>>>>> 15f129ef73fd751b1d934993ce5ebe894c11839d
