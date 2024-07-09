import React from 'react';
import { Grid } from '@mui/material';
import MovieCard from './MovieCard';

const SearchResults = ({ movies }) => {
  return (
    <Grid container justifyContent="center">
      {movies && movies.length > 0 ? (
        movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))
      ) : (
        <Grid item>
          <p>Aucun film trouvé.</p>
        </Grid>
      )}
    </Grid>
  );
};

export default SearchResults;
