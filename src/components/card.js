import React, { Component } from "react";
import "bulma/css/bulma.css";
import "../App.css";

const Card = (props) => {
  return (
    <section class="container">
        <div class="columns">
          <div class="column cardcont">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img
                    src = {props.movie.Poster}
                    alt = "Placeholder image"
                  />
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">{props.movie.Title}</p>
                  </div>
                </div>

                <div class="content">
                {props.movie.Plot}
                  <br />
                  <time datetime="2016-1-1">{props.movie.Released}</time>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Card;
