import React, { Component } from "react";
import "bulma/css/bulma.css";
import "../App.css";
import { CSSTransitionGroup } from 'react-transition-group'

const Card = (props) => {
  const image = props
  
  return (
    <div class="column charhold">
      <div class="charcard">
      <CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
      <img class="charimg" src={props.name} />
      </CSSTransitionGroup>
      </div>
    </div>
  );
  
}

export default Card;
