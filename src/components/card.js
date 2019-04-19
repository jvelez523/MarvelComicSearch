import React, { Component } from "react";
import "bulma/css/bulma.css";
import "../App.css";
import { CSSTransitionGroup } from "react-transition-group";

const Card = props => {
  const image = props;

  return (
    //<div class="column charhold">
    //  <div class="charcard">
    //      <img class="charimg" src={props.img} />
    //      <p>{props.bio}</p>
    //  </div>
    //</div>
    <a href={props.wiki}>
      <div class="card">
        <div class="card-image">
          <img class="charimg" src={props.img} alt="Placeholder image" />
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">{props.name}</p>
              <div class="content">{props.bio}</div>
            </div>
          </div>
        </div>
      </div>
      </a>
  );
};

export default Card;
