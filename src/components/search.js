import React, { Component } from "react";
import "bulma/css/bulma.css";
import "../App.css";
import Card from './card'
import ReactLoading from 'react-loading';

var api = require("marvel-api");

var marvel = api.createClient({
  publicKey: "55640e164d9fa52e7a5f517bb2979ce1",
  privateKey: "12557b50b64ba4c2376112e8be1154d2c7673505"
});

// var imgSrc = [];

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
    this.state = { 
      value: "",
      cards: []
    
    };

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
      .then((res) => {
        console.log(res.data)
        this.setState({cards:res.data})
        // for (var i=0; i < res.data.length; i++){
        //   var name = res.data[i].name
        //   var thumb = res.data[i].thumbnail.path + ".jpg"
        //   var bio = res.data[i].description
        //   //console.log(res.data[i])
        //   console.log(name)
        //   console.log(thumb)
        //   console.log(bio)
        //   // console.log("----------- ", this.state)
        //   this.state.cards.push({img: thumb});
        //   // imgSrc.push({name: thumb})
        //   // console.log("=========== ", this.state)
        // }
        //console.log(res.data);
        //console.log("found character " + res.data[0].name);
        //console.log(res.data[0].thumbnail.path + ".jpg");
      })
      .fail(console.error)
      .done();
    event.preventDefault();
    // this.setState({cards: i  mgSrc})
  }

  showCards = () => {
    console.log(">>>>>>>>>>>>>> ", this.state)

    return this.state.cards.map(card=> <Card bio={card.description} img={card.thumbnail.path + '.' + card.thumbnail.extension} name={card.name} wiki={card.urls[1].url}></Card>) //<Card {name}/>//this.state.cards.map(card=>card.name)
  }

  render() {
    return (
      <section className="searchbar">
      <h1>Marvel Character Search</h1>
        <div className="columns is-mobile">
          <div className="column">
            <form className="field has-addons center" onSubmit={this.handleSubmit}>
              <div className="control">
                <input
                  className="input is-large"
                  type="text"
                  placeholder="Search Marvel"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
              </div>
              <div className="control">
                <button type="submit" className="button is-large marvbtn">
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="columns characters is-mobile">
        {this.showCards()}
        </div>
      </section>
    );
  }
}

export default Search;
