import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'
import './NewsCard.css'
import CardMedia from '@mui/material/CardMedia';









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
        <Typography sx={{ mb: 1.5 }} color="black">
        {props.news.title}
        </Typography>
        <Typography sx={{ mb: 1.5, fontSize: 10 }} variant="body2" color="text.secondary" component="div">
          {props.news.description}
        </Typography>
      </Box>   
    </Card>
       
  );
}
