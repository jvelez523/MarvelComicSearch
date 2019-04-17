import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import '../App.css';

class Navbar extends Component {
  render(){
    return (
      <nav className="navbar is-black" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img src="https://logorealm.com/wp-content/uploads/2016/07/Marvel-Logo.png" width="100" height="auto" />
        </a>
    
        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item navitem">
            Home
          </a>
    
          <a className="navbar-item navitem">
            About
          </a>
        </div>
    
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button marvbtn">
                <strong>Sign up</strong>
              </a>
              <a className="button is-light">
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
