import React, { useState} from 'react';
import { searchMovies } from '../services/movieService';
import MovieTable from './MovieTable';
import './MovieSearch.js.css';

function MovieSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  
  const handleSearch = async () => {
    try {
      const formattedQuery = query.replace(/ /g, '+');
      const response = await searchMovies(formattedQuery);
      setResults(response.results);
    } catch (error) {
      console.error('Error searching for movies:', error);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Movie Search</h1>
      <div className="search-bar">
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
        <button onClick={handleSearch}>Search</button>
      </div>
  
      <MovieTable movies={results} />
    </div>
  );}

export default MovieSearch;
