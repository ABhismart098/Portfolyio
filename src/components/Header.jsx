import React from 'react'
import {ReactNavbar} from "overlay-navbar"
import logo from "../img/logo.png"
import {FaUserAlt} from "react-icons/fa"

function Header() {
  return <ReactNavbar 
  navColor1 = "white" 
  navColor2 ="hsl(219 48% 8%)"
  burgerColor="hsl(250 100% 75%)"
  burgerColorHover ="hsl(250 100% 75%)"
  logo ={logo}
  logowidth= "350px"
  logoHoverColor="hsl(255, 100%, 75%)"
  nav2justifyContent = "space-around"
  nav3justifyContent = "space-around"
  link1Text= "Home"
  link2Text= "About"
  link3Text= "Projects"
  link4Text= "Contacts"
  link1url= "/"
  link2url= "/about"
  link3url= "/projects"
  link4url= "/contacts"
  link1ColorHover = "white"
  link1Color = "hsl(250, 100%, 75%)"
  link1Size="1.5rem"
  link1padding="3vmax"
  profileIcons = {true}
  profileIconsElements={FaUserAlt}
  
  
  
  
  />


}


export default Header