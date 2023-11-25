import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieSearch from './components/MovieSearch';
import MovieDetails from './components/MovieDetails';
import UserTopLists from './components/UserTopLists';
import AuthForm from './components/AuthForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={MovieSearch} />
          <Route path="/movies/:movieId" component={MovieDetails} />
          <Route path="/toplists" component={UserTopLists} />
          <Route path="/login" component={AuthForm} />
          <Route path="/signup" component={AuthForm} />
          {/* Add more routes as needed */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
