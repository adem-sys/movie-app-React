import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=a2ce4af8`);
      setMovie(response.data);
    };

    fetchMovie();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <h2>{movie.Title}</h2>
      <p>{movie.Year}</p>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <p>{movie.Plot}</p>
    </div>
  );
};

export default MovieDetail;