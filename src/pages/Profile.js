import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getWatchlist } from '../services/userService';
import { getMovies } from '../services/movieService';
import MovieTable from '../components/MovieTable';
import './Profile.js.css';

function Profile() {
  const { username } = useParams();
  const [favorites, setFavorites] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movieIds = await getWatchlist(username);
        const movies = await getMovies(movieIds);
        setFavorites(movies);
      } catch (error) {
        setIsLoggedIn(false);
      }
    };

    fetchMovies();
  }, [username]);

  return (
    <div>
      <h1 className='title'>{username}'s Watchlist</h1>
      {isLoggedIn ? (
      <MovieTable movies={favorites} />
    ) : (
      <p>You must be logged in to view the watchlist.</p>
    )}
    </div>
  );
}

export default Profile;