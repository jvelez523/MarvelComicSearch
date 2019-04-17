import React, { Component } from "react";
import "bulma/css/bulma.css";
import "../App.css";
import Card from './card'
var api = require("marvel-api");

var marvel = api.createClient({
  publicKey: "55640e164d9fa52e7a5f517bb2979ce1",
  privateKey: "12557b50b64ba4c2376112e8be1154d2c7673505"
});

//var character = character => {
//  marvel.characters
//    .findNameStartsWith(character)
//    .then(function(res) {
//      console.log(res.data);
//      console.log("found character " + res.data[0].name);
//      console.log(res.data[0].thumbnail.path + ".jpg");
//    })
//    .fail(console.error)
//    .done();
//};

//character("black panther")

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    //alert('A name was submitted: ' + this.state.value);

    marvel.characters
      .findNameStartsWith(this.state.value)
      .then(function(res) {
        for (var i=0; i < res.data.length; i++){
          var name = res.data[i].name
          var thumb = res.data[i].thumbnail.path + ".jpg"
          var bio = res.data[i].description
          //console.log(res.data[i])
          console.log(name)
          console.log(thumb)
          console.log(bio)
          this.image.setState = thumb
        }
        //console.log(res.data);
        //console.log("found character " + res.data[0].name);
        //console.log(res.data[0].thumbnail.path + ".jpg");
      })
      .fail(console.error)
      .done();
    event.preventDefault();
  }

  render() {
    return (
      <section class="searchbar">
        <div class="columns is-mobile">
          <div class="column">
            <form class="field has-addons center" onSubmit={this.handleSubmit}>
              <div class="control">
                <input
                  class="input is-large"
                  type="text"
                  placeholder="Search Marvel"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
              </div>
              <div class="control">
                <button type="submit" class="button is-large marvbtn">
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default Search;
