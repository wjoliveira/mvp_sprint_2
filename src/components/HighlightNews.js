import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Stack, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

export const Item = styled(Paper)(({ theme }) => ({
  //backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  //...theme.typography.body2,
  //padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function HighlightNews(props) {

  const navigate = useNavigate()

  const highlight = props.highlight;

  return (
    <Box sx={{ flexGrow: 1, width: '1280px', height: '360px', margin: '0 auto', mt: '124px'}}>
      <Card sx={{width: '1280px', height: '360px', backgroundColor: '#1976D2'}}>
      <Link style={{ textDecoration: 'none' }} to={`/${highlight.sport}/${highlight.id}`} state={{n:highlight}}>
        <CardActionArea >
          <CardMedia 
            component="img"
            height="240"
            image={highlight.image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" color='#FFF'>
              Highlight
            </Typography>
            <Typography variant="body2" color="#FFF">
              {highlight.title}
            </Typography>
          </CardContent>
        </CardActionArea>
        </Link>
      </Card>
    </Box>
  );
}