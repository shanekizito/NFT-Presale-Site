import React from "react";
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import Box from '@mui/material/Box';
import PasswordStr from "./PasswordStr";
import "./style.css";

const LoginForm = ({
  history,
  onSubmit,
  onChange,
  errors,
  user,
  score,
  btnTxt,
  type,
  pwMask,
  onPwChange
}) => {
  return (
    <Box
      className="signup-form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    
    autoComplete="off"
  >
    <div className="loginBox">
      <h1>Login</h1>
      {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}

      <form  className="forms" onSubmit={onSubmit}  autoComplete="off" >
        
        <TextField
          name="email"
          id="outlined-basic" label="email" variant="outlined"
          value={user.email}
          onChange={onChange}
          errorText={errors.email}
        />
        <TextField
       
         name="password"
          id="outlined-basic" label="password" variant="outlined"
          value={user.password}
          onChange={onPwChange}
          errorText={errors.password}
        />

        <div className="pwStrRow">
          {score >= 1 && (
            <div>
              <PasswordStr score={score} /> 
              <Button 
                className="pwShowHideBtn" 
                label={btnTxt} onClick={pwMask} 
                style={{position: 'relative', left: '50%', transform: 'translateX(-50%)'}} 
              >Show/hide</Button>
            </div>
            )} 
        </div>
        
        <br/>

        <Button variant="contained"
        onClick={onSubmit}
          className="signUpSubmit"
          primary={true}
          type="submit"
          label="submit"
        >Sign in</Button>

     <div className="login_Link">
     <p>
        Don't have  an account? <br />

        <a  onClick={()=>{
          window.location.href = "/SignUp";
        }}>Sign Up here</a>
      </p>
      
     
      </div>
      </form>
     
    </div>
    </Box>
  );
};

export default LoginForm;
