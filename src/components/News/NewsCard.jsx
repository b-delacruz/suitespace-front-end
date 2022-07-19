import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'
import './NewsCard.css'









export default function NewsCard(props) {
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardContent>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {props.news.title}
        </Typography>
        <Typography variant="body">
        {props.news.pillarName}
          <br />
          <img src={props.news.urlToImage} width={200} height={100}></img>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <a href={props.news.url}>Learn More</a>
        </Button>
      </CardActions>
    </Card>
       
  );
}
