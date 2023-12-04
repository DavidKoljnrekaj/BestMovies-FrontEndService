import React from 'react';
import { Link } from 'react-router-dom';
import './Header.js.css';

function Header({ user, onOpen }) {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/movielist/now_playing">Now Playing</Link></li>
          <li><Link to="/movielist/popular">Popular</Link></li>
          <li><Link to="/movielist/top_rated">Top Rated</Link></li>
          <li><Link to="/movielist/upcoming">Upcoming</Link></li>
        </ul>
      </nav>
      {user ? (
        <Link to={`/profile/${user}`} className="profile-button">{user}</Link>
      ) : (
        <button onClick={onOpen} className="profile-button">Login</button>
      )}
    </header>
  );
}

export default Header;