import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../store/movieSlice';
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';

const SearchPage = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);

  const handleSearch = (query) => {
    dispatch(fetchMovies(query));
  };

  return (
    <div>
      <h1>Movie Search</h1>
      <SearchBar onSearch={handleSearch} />
      <SearchResults movies={movies} />
    </div>
  );
};

export default SearchPage;