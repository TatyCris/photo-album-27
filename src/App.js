import React, { Component } from 'react'
import './App.css';
import AlbumsListContainer from './components/AlbumListContainer';
import { Route }  from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Route exact path="/" component={AlbumsListContainer} />
        </header>
      </div>
    );
  }
}