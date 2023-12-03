import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieSearch from './components/MovieSearch';
import MovieDetails from './components/MovieDetails';
import AuthForm from './components/AuthForm';
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MovieSearch />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/login" element={<AuthForm />} />
          <Route path="/signup" element={<AuthForm />} />
          <Route path="/profile/:username" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
