import React, { useEffect, useState } from 'react'; // Import useState from 'react'
import { Typography, Button } from '@mui/material';
import './Login.css';
import { login } from '../../action/user';
import {useDispatch, useSelector} from "react-redux"
import { useAlert } from 'react-alert';

const Login = () => {
  

  // Use useState correctly by initializing state variables with useState and destructuring them correctly
  const [email, setEmail] = useState(''); // Use correct variable names and destructuring
  const [password, setPassword] = useState(''); // Use correct variable names and destructuring
  const dispatch = useDispatch();
  const alert = useAlert();
  const {loading, message, error} = useSelector(state => state.login)


  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password))
  };

  useEffect(()=>{
   if(error){
    alert.error(error);
    dispatch({ type: "CLEAR_ERROR", })
   }if(message){
    alert.success(message);
    dispatch({type: "CLEAR_MESSAGE", })
   }

  }, [alert,error,message, dispatch])

  return (
    <div className='login'>
      <div className='loginContainer'>
        <form className='loginForm' onSubmit={submitHandler}>
          <Typography variant='h4'>
                   <p>A</p>
                   <p>D</p>
                   <p>M</p>
                   <p>I</p>
                   <p style={{ marginRight: "1vmax"}}>N</p>


                   <p>P</p>
                   <p>A</p>
                   <p>N</p>
                   <p>E</p>
                   <p>L</p>

          </Typography>

          <div>
            <input
              type='email'
              placeholder='Admin Email'
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Correct usage of setEmail
            />
            <input
              type='password' // Use lowercase 'password' for input type
              required 
              placeholder='Admin Password'

              value={password} // Correct usage of password state
              onChange={(e) => setPassword(e.target.value)} // Correct usage of setPassword
            />

            <Button type='submit' variant='contained' disabled = {loading}>
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
