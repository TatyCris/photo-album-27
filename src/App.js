import React, { Component } from 'react'
import './App.css';
import AlbumsListContainer from './components/AlbumListContainer';


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <AlbumsListContainer />
        </header>
      </div>
    );
  }
}