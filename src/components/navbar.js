import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import '../App.css';

class Navbar extends Component {
  render(){
    return (
      <nav class="navbar is-black" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="https://logorealm.com/wp-content/uploads/2016/07/Marvel-Logo.png" width="100" height="auto" />
        </a>
    
        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    
      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item navitem">
            Home
          </a>
    
          <a class="navbar-item navitem">
            About
          </a>
        </div>
    
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button marvbtn">
                <strong>Sign up</strong>
              </a>
              <a class="button is-light">
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
      )
  }
}

export default Navbar;
