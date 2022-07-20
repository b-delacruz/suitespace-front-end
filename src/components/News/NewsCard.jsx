import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './NewsCard.css'






export default function NewsCard(props) {


  return (
    <Card sx={{ display: 'flex' }}>
      <CardMedia
      component="img"
      sx={{ width: 100 }}
      image={props.news.urlToImage}
      alt="News image"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography sx={{ mb: 1.5, color: 'red' }} color="black">
        {props.news.title.split(" ").splice(0,8).join(" ")}...
        </Typography>
        <Typography sx={{ mb: 1.5, fontSize: 10 }} variant="body2" color="text.secondary" component="div">
          {props.news.description.split(" ").splice(0,20).join(" ")}...
        </Typography>
        <Button>
          <a target="_blank" href={props.news.url}>
            Learn More
          </a>
        </Button>
      </Box>   
    </Card>
  );
}
