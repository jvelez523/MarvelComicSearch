import React, { Component } from "react";
import "bulma/css/bulma.css";
import "../App.css";

const Card = (props) => {
  const image = props
  
  return (
    <column>
      <div class="charcard">{props.name}</div>
    </column>
  );
  
}

export default Card;
