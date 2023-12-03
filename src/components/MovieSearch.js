import React, { useState, useEffect } from 'react';
import { searchMovies } from '../services/movieService';
import { Link } from 'react-router-dom';
import './MovieSearch.js.css';

function MovieSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('username');
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

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
  
      {user ? (
        <Link to={`/profile/${user}`} className="profile-button">{user}</Link>
      ) : (
        <Link to="/login" className="profile-button">Login</Link>
      )}
    </div>
  );}

export default MovieSearch;
