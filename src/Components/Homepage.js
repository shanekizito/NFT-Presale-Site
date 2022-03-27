import React from 'react'
import heroblack from '../Assets/heroblack.jpg'
import './Homepage.css';
import { useNavigate } from 'react-router-dom';
import Follow from './Follow';

const Homepage = (props) => {
 const navigate = useNavigate();

  return (

    <div>
        <div className="hero-section">
        <div className="Hero-Texts">
            <h2>Welcome to Office</h2>
            <h3>Your place to create, communicate, collaborate, and get great work done.</h3>
            <button className="btn-sign-in" onClick={()=>{
                navigate('/');
            }}>Sign in</button>
            <button className="btn-get-office">Get Office</button>
            <h3>Sign up for the free version of Office</h3>
        </div>
        </div>
        <Follow/>  
    </div>
  )
}

export default Homepage