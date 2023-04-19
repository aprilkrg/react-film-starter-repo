import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="film-library">
          <div className="film-list">
            <h1 className="section-title">FILMS</h1>
          </div>

          <div className="film-details">
            <h1 className="section-title">DETAILS</h1>
          </div>
        </div>
      </div>
    );
  }
}
