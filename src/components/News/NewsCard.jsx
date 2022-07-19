import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';






export default function NewsCard(props) {
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardContent>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {props.news.webTitle}
        </Typography>
        <Typography variant="body">
        {props.news.pillarName}
          <br />
          {}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
       
  );
}
