import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { setCurrentUser } from './services/userService';
import MovieSearch from './pages/MovieSearch';
import MovieDetails from './pages/MovieDetails';
import ActorDetails from './pages/ActorDetails';
import MovieList from './pages/MovieList';
import Profile from './pages/Profile';
import AuthForm from './components/AuthForm';
import Header from './components/Header';
import Modal from './components/Modal';

function App() {
  const [user, setUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleLogin = (username) => {
    setCurrentUser(username);
    setUser(username);
  };

  const handleLogout = () => {
    setCurrentUser("");
    setUser(null);
  };
  return (
    <Router>
      <div className="App">
      <Header user={user} onOpen={handleOpenModal} onLogout={handleLogout}/>
        <Routes>
          <Route path="/" element={<MovieSearch />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/login" element={<AuthForm onLogin={handleLogin} />} />
          <Route path="/signup" element={<AuthForm />} />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="/movielist/:type" element={<MovieList />} />
          <Route path="/actors/:actorId" element={<ActorDetails/>} />
        </Routes>
        {isModalOpen && (
          <Modal onClose={handleCloseModal}>
            <AuthForm onLogin={handleLogin} onClose={handleCloseModal} />
          </Modal>
        )}
      </div>
    </Router>
  );
}

export default App;
