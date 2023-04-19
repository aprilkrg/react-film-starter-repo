import React, { Component } from 'react';
import './App.css';

import FilmList from './components/FilmList';
import Details from './components/Details';

export default class App extends Component {
  render() {
    return (
      <div className="film-library">
        <FilmList />
        <Details />
      </div>
    );
  }
}
