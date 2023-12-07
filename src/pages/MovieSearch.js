import React, { useState, useEffect } from 'react';
import { searchMovies , getTrendingMovies } from '../services/movieService';
import MovieTable from '../components/MovieTable';
import './MovieSearch.js.css';

function MovieSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getTrendingMovies().then(movies => {
      setTrendingMovies(movies.results);
      setIsLoading(false);
    });
  }, []);
  
  const handleSearch = async () => {
    try {
      setIsLoading(true);
      const formattedQuery = query.replace(/ /g, '+');
      const response = await searchMovies(formattedQuery);
      setResults(response.results);
      setIsLoading(false);
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
      {isLoading ? (
  <p>Loading...</p>
) : query === '' ? (
  <>
    <h2>Trending today:</h2>
    <MovieTable movies={trendingMovies} />
  </>
) : (
  <MovieTable movies={results} />
)}
    </div>
  );}

export default MovieSearch;
