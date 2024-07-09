import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import MovieDetail from './pages/MovieDetail';
import { Container } from '@mui/material';

function App() {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;