import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';

export default function ReusableCard(props) {

  return (
    <Card sx={{ maxWidth: 345 }}>
        {/* <CardMedia
            sx={{ height: 140 }}
            image={props.image}
            title={props.name}
        /> */}
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {props.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small" onClick={props.onClick}>Close</Button>
      </CardActions>
    </Card>
  );
}