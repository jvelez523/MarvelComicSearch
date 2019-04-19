import React from "react";

class About extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="columns">
          <div className="column">
            <h1>About This Project</h1>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <h2 class="abouttext">
              This project was made using: React, Bulma, and the Marvel APi
            </h2>
            <h2 class="abouttext">Made by Justin Velez</h2>
          </div>
        </div>
        <div class="columns logohold">
          <column>
            <a href="https://github.com/jvelez523"><img class="abtimg" src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/github_circle_color-512.png" /></a>
          </column>
          <column>
            <a href="https://www.linkedin.com/in/justinvelez23/"><img class="abtimg" src="https://cdn2.iconfinder.com/data/icons/popular-social-media-flat/48/Popular_Social_Media-22-512.png" /></a>
          </column>
        </div>
      </div>
    );
  }
}
export default About;
