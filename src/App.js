import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import './style/style.css';

import About from './pages/about/About';
import Contact from './pages/contact/Contact';

import MovieDetails from './components/movieDetails/MovieDetails';

import SearchMovie from './pages/tracks/SearchMovie';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path='/' component={Home} />

          <Route path='/searchMovie' component={SearchMovie} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/movie/details/:slug' component={MovieDetails} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
