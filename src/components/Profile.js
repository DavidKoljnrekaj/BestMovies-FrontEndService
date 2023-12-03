import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFavourites } from '../services/userService';

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
      {favorites.length > 0 ? (
        <ul>
          {favorites.map((movie) => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      ) : (
        <p>No favorite movies</p>
      )}
    </div>
  );
}

export default Profile;