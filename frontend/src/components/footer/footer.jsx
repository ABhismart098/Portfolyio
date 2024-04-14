import React from 'react';
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Typography from '@mui/material/Typography';
import "./footer.css"
import { 
    BsGithub,
    BsInstagram,
    BsLinkedin,
    BsYoutube
} from 'react-icons/bs'; // Import Typography from MUI

const Footer = () => {
  return (
    <div className='footer'>
      <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>
          I am Abhishek Yadav, a dedicated Software Engineer based in Gurgaon City, IN. With a Bachelor's degree in Computer Science Engineering from Dronacharya College of Engineering, I have a solid foundation in building robust applications and solving complex problems. My passion lies in MERN stack and Java development, where I leverage technologies like React.js, Node.js, Express.js, MongoDB, MySQL, and Sequelize ORM to create innovative solutions.
        </Typography>
        <Link to="/contact" className='footerContactBtn'>
          <Typography>Contact Us</Typography>
        </Link>
      </div>
      <div>
        <Typography variant='h6'>Social Media</Typography>
        <a href='https://github.com/ABhismart098' target='blank'> {/* Corrected target attribute */}
          <BsGithub />
        </a>
        <a href='https://www.youtube.com/' target='blank'> {/* Corrected target attribute */}
          <BsYoutube />
        </a>
        <a href='https://www.instagram.com/yadavabhi20/' target='blank'> {/* Corrected target attribute */}
          <BsInstagram />
        </a>
        <a href='https://www.linkedin.com/in/abhishek-yadav-a25471191/' target='blank'> {/* Corrected target attribute */}
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Footer;
