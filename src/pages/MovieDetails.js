import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../services/movieService';
import { getMovieCast, getMovieDirectors } from '../services/castService';
import { addToWatchlist, removeFromWatchlist, isInWatchlist } from '../services/userService';
import './MovieDetails.js.css';

function MovieDetails() {
  const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/original';
  const [details, setDetails] = useState(null);
  const [watchlist, setWatchlist] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cast, setCast] = useState([]);
  const [directors, setDirectors] = useState([]);
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
        
      }
      try {
        const response = await getMovieDetails(movieId);
        setDetails(response);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
      try {
        const castData = await getMovieCast(movieId);
        setCast(castData);
        const directorsData = await getMovieDirectors(movieId);
      setDirectors(directorsData);
      } catch (error) {
        console.error('Error fetching cast details:', error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);


return (
  <div className="movie-details">
     {details && (
     <>
       <div className="header">
         <h1 className="movie-title">
          {details.title} ({new Date(details.release_date).getFullYear()})
         </h1>
         <p className="movie-tagline">"{details.tagline}"</p>
         <button onClick={toggleWatchlist} className="watchlist-button">
           {watchlist ? 'Remove from Watchlist' : 'Add to Watchlist'}
         </button>
       </div>
       <div className="details-container">
         <img src={`${BASE_IMAGE_URL}${details.poster_path}`} alt={details.title} className="details-image" />
         <div className="details">
          <div className="overview">{details.overview}</div>
          <div className="details-item">Genres: {details.genres.map(genre => genre.name).join(', ')}</div>
          <div className="details-item">Production: {details.production_companies.map(company => company.name).join(', ')}</div>
          <div className="details-item">Countries: {details.production_countries.map(country => country.name).join(', ')}</div>
          <div className="details-item">Release Date: {details.release_date}</div>
          <div className="details-item">Runtime: {details.runtime} minutes</div>
          <div className="details-item">Spoken Languages: {details.spoken_languages.map(language => language.name).join(', ')}</div>
          <div className="details-item">Status: {details.status}</div>
          <div className="details-item">
            Rating: {" "}
            <div className="vote-average">
              <span style={{width: `${details.vote_average * 10}%`}}></span>
            </div>
            <span className="vote-average-number">{details.vote_average}/10</span>
          </div>
          <div className="details-item">
            Vote Count:&nbsp;
            <span className="vote-count">{details.vote_count}</span>
          </div>
          <div className="details-item">
            Cast:&nbsp;
            {cast.slice(0, 5).map((actor, index, arr) => (
              <React.Fragment key={index}>
                <Link to={`/actors/${actor.id}`}>
                  {actor.name}
                </Link>
                {index < arr.length - 1 && ', '}
              </React.Fragment>
            ))}
          </div>
          <div className="details-item">Directors: {directors.map(director => director.name).join(',&nbsp;')}</div>
         </div>
       </div>
      </>
       )}
    </div>
  );
}

export default MovieDetails;
