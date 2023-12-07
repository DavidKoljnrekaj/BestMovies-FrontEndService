import React, { useState, useEffect } from 'react';
import { searchMovies , getTrendingMovies } from '../services/movieService';
import MovieTable from '../components/MovieTable';
import Pagination from '../components/Pagination';
import './MovieSearch.js.css';

function MovieSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(20);
  const [hasSearched, setHasSearched] = useState(false);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      handleSearch(false);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      handleSearch(false);
    }
  };

  useEffect(() => {
    getTrendingMovies().then(movies => {
      setTrendingMovies(movies.results);
      setIsLoading(false);
    });
  }, []);
  
  const handleSearch = async (x = true) => {
    if(query === '') 
    {
      setHasSearched(false);
      return;}
      if(x)
      {
        setCurrentPage(1);
      }
    try {
      setIsLoading(true);
      const formattedQuery = query.replace(/ /g, '+');
      const response = await searchMovies(formattedQuery, currentPage);
      setResults(response.results);
      setTotalPages(response.total_pages);
      setIsLoading(false);
      setHasSearched(true);
    } catch (error) {
      console.error('Error searching for movies:', error);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Search movies: </h1>
<div className="search-bar">
  <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
  <button onClick={handleSearch}>Search</button>
</div>
      {isLoading ? (
        <p>Loading...</p>
      ) : !hasSearched ? (
        <>
          <h2 className="trending-title">Trending today:</h2>
          <MovieTable movies={trendingMovies} />
        </>
      ) : (
        <>
          <MovieTable movies={results} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onNextPage={handleNextPage}
            onPreviousPage={handlePreviousPage}
          />
        </>
      )}
      
    </div>
  );}

export default MovieSearch;
