import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.js.css';

function Header() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('username');
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);


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
        <Link to="/login" className="profile-button">Login</Link>
      )}
    </header>
  );
}

export default Header;