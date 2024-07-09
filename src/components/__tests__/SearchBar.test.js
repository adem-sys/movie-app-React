// components/SearchResults.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchResults from '../SearchResults';

test('renders SearchResults with movies', () => {
  const movies = [
    { imdbID: '1', Title: 'Batman', Year: '2020', Poster: 'http://example.com/batman.jpg' },
    { imdbID: '2', Title: 'Superman', Year: '2018', Poster: 'http://example.com/superman.jpg' },
  ];

  render(<SearchResults movies={movies} />);

  // Assert that movie cards are rendered
  const movieTitles = screen.getAllByRole('heading', { level: 2 });
  expect(movieTitles).toHaveLength(2); // Assuming two movies are rendered
});

test('renders SearchResults with no movies', () => {
  render(<SearchResults movies={[]} />);

  // Assert that no movies message is rendered
  const noMoviesMessage = screen.getByText(/aucun film trouvé/i);
  expect(noMoviesMessage).toBeInTheDocument();
});
