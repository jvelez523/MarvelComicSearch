import React, { Component } from "react";
import "bulma/css/bulma.css";
import "../App.css";

class Search extends Component {
  render() {
    return (
      <section class="searchbar">
        <div class="columns is-mobile">
          <div class="column">
            <div class="field has-addons center">
              <div class="control">
                <input
                  class="input is-large"
                  type="text"
                  placeholder="Search Marvel"
                />
              </div>
              <div class="control">
                <a class="button is-large marvbtn">Search</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Search;
