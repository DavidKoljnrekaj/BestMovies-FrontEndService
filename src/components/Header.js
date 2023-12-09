import React from 'react';
import { Link , useNavigate} from 'react-router-dom';
import logo from '../icons/logo.png';
import './Header.js.css';

function Header({ user, onOpen, onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };


  return (
    <header>
    <Link to="/"><img src={logo} alt="Home" className="logo"/></Link>
      <nav>
        <ul>
          <li><Link to="/movielist/now_playing">Now Playing</Link></li>
          <li><Link to="/movielist/popular">Popular</Link></li>
          <li><Link to="/movielist/top_rated">Top Rated</Link></li>
          <li><Link to="/movielist/upcoming">Upcoming</Link></li>
        </ul>
      </nav>
      {user ? (
        <div className="dropdown">
          <button className="dropbtn">{user}</button>
          <div className="dropdown-content">
            <Link to={`/profile/${user}`}>My Watchlist</Link>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </div>
      ) : (
        <button onClick={onOpen} className="profile-button">Login</button>
      )}
    </header>
  );
}

export default Header;