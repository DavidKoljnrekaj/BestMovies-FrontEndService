import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../services/movieService';
import { addToWatchlist, removeFromWatchlist, isInWatchlist } from '../services/userService';
import './MovieDetails.js.css';

function MovieDetails() {
  const [details, setDetails] = useState(null);
  const [watchlist, setWatchlist] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let { movieId } = useParams();

  const toggleWatchlist = async () => { 
    if (!isLoggedIn) {
      alert('You must be logged in to add movies to your watchlist');
      return;
    }
    else{
    try {
      if (watchlist) {
        await removeFromWatchlist(movieId);
        alert('Movie removed from watchlist');
      } else {
        await addToWatchlist(movieId);
        alert('Movie added to watchlist');
      }
      setWatchlist(!watchlist);
    } catch (error) {
      console.error('Error updating watchlist:', error);
    }
  }
  };

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const isInWatchlistResult = await isInWatchlist(movieId);
        setWatchlist(isInWatchlistResult);
        setIsLoggedIn(true);
      } catch (error) {
        console.error('Error fetching watchlist:', error);
      }
      try {
        const response = await getMovieDetails(movieId);
        setDetails(response);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);


  return (
    <div className="movie-details">
      <h1>Movie Details</h1>
      <button onClick={toggleWatchlist} className="watchlist-button">
        {watchlist ? 'Remove from Watchlist' : 'Add to Watchlist'} {/* Button text based on watchlist state */}
      </button>
      {details && (
        <div>
          <h2>{details.title}</h2>
          <p>{details.overview}</p>
          <p>Genres: {details.genres.map(genre => genre.name).join(', ')}</p>
          <p>Production Companies: {details.production_companies.map(company => company.name).join(', ')}</p>
          <p>Production Countries: {details.production_countries.map(country => country.name).join(', ')}</p>
          <p>Release Date: {details.release_date}</p>
          <p>Runtime: {details.runtime} minutes</p>
          <p>Spoken Languages: {details.spoken_languages.map(language => language.name).join(', ')}</p>
          <p>Status: {details.status}</p>
          <p>Tagline: {details.tagline}</p>
          <p>Vote Average: {details.vote_average}</p>
          <p>Vote Count: {details.vote_count}</p>
        </div>
      )}
    </div>
  );
}

export default MovieDetails;
