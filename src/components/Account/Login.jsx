import React, { useState } from 'react'; // Import useState from 'react'
import { Typography, Button } from '@mui/material';
import './Login.css';

const Login = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  // Use useState correctly by initializing state variables with useState and destructuring them correctly
  const [email, setEmail] = useState(''); // Use correct variable names and destructuring
  const [password, setPassword] = useState(''); // Use correct variable names and destructuring

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

            <Button type='submit' variant='contained'>
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
