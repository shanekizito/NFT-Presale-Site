import React from "react";
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import Box from '@mui/material/Box';
import PasswordStr from "./PasswordStr";
import "./style.css";

const SignUpForm = ({
  history,
  onceSubmit,
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
      <h1>Sign Up</h1>
      {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}

      <form  className="forms" onSubmit={onceSubmit}  autoComplete="off" >
        <TextField
          name="username"
          id="outlined-basic" label="username" variant="outlined"
        
          value={user.username}
          onChange={onChange}
          errorText={errors.username}
        />
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
        <TextField
          type={type}
          name="pwconfirm"
          id="outlined-basic" label="confirm password" variant="outlined"
          floatingLabelText="confirm password"
          value={user.pwconfirm}
          onChange={onChange}
          errorText={errors.pwconfirm}
        />
        <br/>

        <Button variant="contained"
          
          primary={true}
          type="submit"
          label="submit"
        >Submit</Button>

     <div className="login_Link">
      <p>
        Aleady have an account? <br />

        <a  onClick={()=>{
          window.location.href = "/login";
        }}>Log in here</a>
      </p>

     
      </div>
      </form>
     
    </div>
    </Box>
  );
};

export default SignUpForm;
