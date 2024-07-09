import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';

const MovieCard = ({ movie }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardMedia
        component="img"
        height="140"
        image={movie.Poster}
        alt={`${movie.Title} poster`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {movie.Title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {movie.Year}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MovieCard;