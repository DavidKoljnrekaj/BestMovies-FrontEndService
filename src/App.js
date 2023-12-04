import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieSearch from './components/MovieSearch';
import MovieDetails from './components/MovieDetails';
import AuthForm from './components/AuthForm';
import Profile from './components/Profile';
import MovieList from './components/MovieList';
import Header from './components/Header';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (username) => {
    setUser(username);
  };

  const handleLogout = () => {
    setUser(null);
  };
  return (
    <Router>
      <div className="App">
      <Header user={user} />
        <Routes>
          <Route path="/" element={<MovieSearch />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/login" element={<AuthForm onLogin={handleLogin} />} />
          <Route path="/signup" element={<AuthForm />} />
          <Route path="/profile/:username" element={<Profile onLogout={handleLogout} />} />
          <Route path="/movielist/:type" element={<MovieList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
