import React from 'react';
import './YoutubeCard.css'; // Assuming your CSS file is named YoutubeCard.css
import Typography from '@mui/material/Typography';

function YoutubeCard({
  url = 'https://www.youtube.com',
  title = 'Click to play',
  image
}) {
  return (
    <div className='youtubeCard'>
      <a href={url} target='_blank' rel="noopener noreferrer">
        <img src={image} alt='video' />
        <Typography>{title}</Typography>
      </a>
    </div>
  );
}

export default YoutubeCard;
