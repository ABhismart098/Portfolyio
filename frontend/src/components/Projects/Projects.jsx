import React from 'react';
import './Projects.css'; // Assuming the correct path to your CSS file
import { Typography } from '@mui/material';
import { AiOutlineProject } from 'react-icons/ai';
import { Delete } from '@mui/icons-material';
import  Image  from '../../img/pro1.png';
import {FaRegSmileWink } from "react-icons/fa"
 


const ProjectCard = ({
  url,
  projectImage,
  projectTitle,
  description,
  technologies,
  isAdmin = false,
  
}) =>{
  return (
    <>
    <a href={url} className="projectCard" target="black">
        <div>
          <img src={projectImage} alt="Project" />
          <Typography variant="h5">{projectTitle}</Typography>
        </div>
        <div>
          <Typography variant="h4"> About Project</Typography>
          <Typography>{description}</Typography>
          <Typography variant="h6">Tech Stack: {technologies}</Typography>
        </div>
      </a>
    {isAdmin &&(
      <button style={{color: "rgba(40,40,40,0.7)"}}>
        <Delete />
      </button>
    )}
    </>
    )
}

const Projects = () => {
  const project = [1,2,3,4];
  return (
    <div className='projects'>
      <Typography variant="h3">
        Project <AiOutlineProject />
      </Typography>
      <div className='projectswrapper'>
        {project.map((project, index) => (
        <ProjectCard 
        url = "https://abhisheky20.netlify.app/"
  projectImage = {Image}
  projectTitle = "Portfolio"
  description = "This is a portfolio useing basic Html css and javascript library for it is provide all basic functionality"
  technologies = "Html,css,js," 
  />
        ))}
      </div>
      <Typography variant = "h3" style={{ font: "100 1.2rem 'Ubuntu Mono'"}} >
      All the projects here are prepared by A-Z Solutions <FaRegSmileWink />

      </Typography>
    </div>
  );
}

export default Projects;
