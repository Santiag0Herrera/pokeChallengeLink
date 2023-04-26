import * as React from 'react';
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';

export default function ReusableCard(props) {
  //CARD CONFIGURATION
  //img --> boolean
  //button --> boolean - if button is enable, then is required an onClick parameter pasing a function
  //isPokemon --> boolean

  const [button, setButton] = useState(false)
  const [img, setImg] = useState(false)
  const [isPokemon, setPokemon] = useState(false)

  useEffect(()=>{
    props.button === true && setButton(true)
    props.img === true && setImg(true)
    if(props.pokemon === true) {
      setPokemon(true)
      console.log(props.pokemonType);
    }
    console.log(button, img, props.descriptionValue);
  })

  return (
    <Card sx={{ maxWidth: 345 }} style={{ backgroundColor: '#1976d2' }}>
      {
        img &&
        <CardMedia
            sx={{ height: 140 }}
            image={props.image}
            title={props.name}
        />
      }
        <CardContent>
            <Typography gutterBottom variant="h5" component="div" style={{color: '#FFE'}}>
                {props.cardTitle}
            </Typography>
            {
              isPokemon ?
              <Typography variant="body2" color="text.secondary" style={{color: '#FFE'}}>
                  <span>Types: </span>{props.pokemonType?.map((type)=>{return <span>{type.type.name} </span>})}
              </Typography>

              :

              <Typography variant="body2" color="text.secondary" style={{color: '#FFE'}}>
                  <span>This is a reusable card!</span>
              </Typography>

            }
        </CardContent>
        {
          button &&
          <CardActions>
            <Button size="small" onClick={props.onClick} style={{color: '#1976d2', backgroundColor: '#FFE'}}>Close</Button>
          </CardActions>
        }
    </Card>
  );
}