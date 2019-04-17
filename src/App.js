import React, { Component } from 'react';
import Navbar from './components/navbar.js'
import Search from './components/search.js'
import Card from './components/card.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div class="content">
      <Navbar />
      <Search />

      </div>
    );
  }
}

export default App;
