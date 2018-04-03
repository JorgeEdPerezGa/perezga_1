import React, { Component } from 'react';
import Image from '../../Image';
import './style.css';

class Weatherly extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  goGitHub = () => {
    const repository = 'https://github.com/JorgeEdPerezGa/weatherly';
    window.open(`${repository}`);
  }

  render() {

    return (
      <div>
        <div className="page-menu-mobile">
          <button
            onClick={() => this.props.history.push('/code')}
            className="show-more">PROJECTS</button>
        </div>
        <section className="icon-section">
          <img
            className="technology-icon"
            src={require("../../../assets/technologies/jslogo.svg")}/>
          <img
            className="technology-icon"
            src={require("../../../assets/technologies/es6logo.svg")}/>
          <img
            className="technology-icon sass-icon"
            src={require("../../../assets/technologies/css.svg")}/>
          <img
            className="technology-icon"
            src={require("../../../assets/technologies/webpack.svg")}/>
          <img
            className="technology-icon git-icon"
            src={require("../../../assets/technologies/gitLogo.svg")}/>
        </section>
        <section>
          <div className="page-title">WEATHERLY</div>
          <button
            className="repository-button"
            onClick={this.goGitHub}>Repository Page</button>
          <section className="project-section">
            <img
              className="image"
              src={require("../../../assets/code/weatherly/1.png")}/>
            <div className="project-description">
              <p className="paragraph-title">Synopsis</p>
              <p className="page-paragraph">{`Weatherly displays a city's current forecast, seven hour forecast, and ten day forecast. Users are able to search for weather conditions of any city in the U.S. and any major cities across the world. An API call is made to wunderground.com to retrieve weather data.`}</p>
            </div>
            <div className="project-description">
              <p className="paragraph-title">Project Goals</p>
              <p
                className="page-paragraph">
                {`• Retrive data by making asynchronous API calls`}</p>
              <p
                className="page-paragraph">
                {`• Write meaningful, comprehensive unit tests`}</p>
              <p
                className="page-paragraph">
                {`• UI should change to reflect the current weather`}</p>
            </div>
            <div className="project-description">
              <p className="paragraph-title">Contributor</p>
              <p
                className="page-paragraph">
                Jorge Ed PerezGa - https://github.com/JorgeEdPerezGa</p>
              <p
                className="page-paragraph">
                Hector A. Sanchez - https://github.com/hsanchez7934</p>
            </div>
            <div className="project-description">
              <p className="paragraph-title">Project Layout</p>
            </div>
            <img
              className="image"
              src={require("../../../assets/code/weatherly/2.png")}/>
          </section>
        </section>
      </div>
    );
  }
}

export default Weatherly;
