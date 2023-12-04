import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFavourites } from '../services/userService';
import MovieTable from './MovieTable';

function Profile() {
  const { username } = useParams();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
     setFavorites(getFavourites(username));
  }, [username]);

  return (
    <div>
      <h1>{username}'s Profile</h1>
      <h2>Favorite Movies</h2>
      <MovieTable movies={favorites} />
    </div>
  );
}

export default Profile;