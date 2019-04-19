import React, { Component } from "react";
import "bulma/css/bulma.css";
import "../App.css";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

// Button Click function

var showmenu = () => {
  var x = document.getElementsByClassName("navbar-menu");
  x.classList.toggle("is-active");
}



class Navbar extends Component {
  render() {
    return (
      <nav
        className="navbar is-black"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img
              src="https://logorealm.com/wp-content/uploads/2016/07/Marvel-Logo.png"
              width="100"
              height="auto"
            />
          </a>

          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onclick=""
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link to="/" className="navbar-item navitem">
              Home
            </Link>

            <Link to="/about" className="navbar-item navitem">
              About
            </Link>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button marvbtn">
                  <strong>Sign up</strong>
                </a>
                <a className="button is-light">Log in</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
