import React from 'react'
import mslogo from '../Assets/mslogo.svg'
import './login.css'
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';
import {Link  } from 'react-router-dom';
import key from '../Assets/key.svg'


const Password = (props) => {

const navigate = useNavigate();
const[formInputs,setFormInputs]=useState({formData:{password:''}});
const [click,setClick]=useState(false);
const [error,setError]=useState(false);




function timeOut(){
  setTimeout(()=>{
    setClick(false);
    setError(true)
  },3000)
}




const handleSubmit=(e)=> {
      e.preventDefault();
      setClick(true);
      props.updateUser(formInputs.formData);
     
     
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
           <p className="email-header"><Link   to='/'><i class="fas fa-arrow-left"></i></Link><span className="email-props">{props.user.email?props.user.email:"janedoe@gmail.com"}</span></p>
           
            <p className="title">Enter password</p>
            {error?<p className="error-message">An error occured, please check input and try again</p>:null}
            <form onSubmit={handleSubmit}>
            <input type="password" name="password" placeholder="Password" id="password" onChange={changeHandler}/>                      
             <p><a href="">Forgotten your password?</a></p>
             <button type="submit" className="btn-password" onClick={()=>timeOut()} >{click?<i class="fas fa-circle-notch"></i>:"sign in"}</button>
            </form>          
        </div>    
        </div>
        
    </div>
  )
}

export default Password