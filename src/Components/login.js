import React from 'react';
import ReactDOM from 'react-dom';
import SignUpContainer from "./SignUpContainer";



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
