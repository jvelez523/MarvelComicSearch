import React, { Component } from 'react';
import Navbar from './components/navbar.js'
import Search from './components/search.js'
import About from './components/about.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="content">
      {/* <Navbar /> */}
      <Search />
      </div>
    );
  }
}

export default App;
