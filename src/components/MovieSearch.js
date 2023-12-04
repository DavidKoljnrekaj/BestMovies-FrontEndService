import React, { useState} from 'react';
import { searchMovies } from '../services/movieService';
import { Link } from 'react-router-dom';
import Header from './Header';
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
      <Header />
      <h1 className="title">Movie Search</h1>
      <div className="search-bar">
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
        <button onClick={handleSearch}>Search</button>
      </div>
  
      <div className="results">
        {results.length > 0 ? (
      results.map((movie) => (
        <Link to={`/movies/${movie.id}`} key={movie.id} className="card">
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
        </Link>
      ))
    ) : (
      <p>No movies found</p>
    )}
      </div>
    </div>
  );}

export default MovieSearch;
