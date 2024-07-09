import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="center" marginY={2}>
      <TextField 
        label="Enter movie title" 
        variant="outlined" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleSearch} sx={{ ml: 2 }}>
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;