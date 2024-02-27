import React from 'react'
import "./About.css"
import Typography from "@mui/material/Typography"
import image from "../../img/Img.jpg"

function About() {
  return (
    <div className='about'>
        <div className='aboutContainer'>
            <Typography>lorem34</Typography>
        </div>
        <div className='aboutContainer2'>
        <div>
            <img src= {image} className='aboutAvatar' alt='My Self'  />
        <Typography variant='h4'
               style={{margin:"1vamx 0", color:"black"}}>
          Abhishek</Typography>

        <Typography >Full Stack Developer </Typography>

        <Typography >Java Developer</Typography>

        <Typography style={{margin:"1vamx 0", }}>I am a Engineer </Typography>

        </div>
        <div>
          <Typography 
          style ={
            {
              wordSpacing:"5px",
              lineHeight:"50px",
              letterSpacing:"5px",
              textAlign:"right"
            }

          }> 
            This is decrpition Lorem ipsum dolor sit amet, consectetur
             adipiscing elit, sed do eiusmod tempor incididunt ut labore 
             
             
          </Typography>


        </div>
        </div>
        </div>
    
  )
}

export default About