import React, { Component } from 'react';
import Image from '../../Image';
import './style.css';

class ComprehensiveLayoutOne extends Component {

  goGitHub = () => {
    const repository = 'https://github.com/JorgeEdPerezGa/jp-comp-challenge';
    window.open(`${repository}`);
  }

  goLiveSite = () => {
    const repository = 'https://jorgeedperezga.github.io/jp-comp-challenge/';
    window.open(`${repository}`);
  }

  render() {

    return (
      <div>
        <section className="icon-section">
          <img
            className="technology-icon html-icon"
            src={require("../../../assets/technologies/html.svg")}/>
          <img
            className="technology-icon css-icon"
            src={require("../../../assets/technologies/css.svg")}/>
          <img
            className="technology-icon"
            src={require("../../../assets/technologies/photoshop.svg")}/>
          <img
            className="technology-icon"
            src={require("../../../assets/technologies/illustrator.svg")}/>
        </section>
        <section>
          <div className="page-title page-title-long">BATMAN - Icon Set And <p className="page-title-second-line">Static Comprehensive Layout</p></div>
          <div className>
          </div>
          <button
            className="repository-button repository-button-left"
            onClick={this.goGitHub}>Repository Page</button>
          <button
            className="repository-button repository-button-right"
            onClick={this.goLiveSite}>Live Site</button>
          <section className="project-section project-section-two">
            <div className="project-description">
              <p className="paragraph-title paragraph-title-two">Description</p>
              <p
                className="page-paragraph page-paragraph-two">
                {`• Very first HTML and CSS static comprehensive layout`}</p>
              <p
                className="page-paragraph page-paragraph-two">
                {`• Original artowork inspired by Batman: The Animated Series`}</p>
              <p
                className="page-paragraph page-paragraph-two">
                {`• Vector based illustrations`}</p>
            </div>
            <img
              className="batman-web-screenshot"
              src={require("../../../assets/design/batman/screen-shot-0.png")}/>
            <div className="project-description">
              <p className="paragraph-title paragraph-title-two">Process</p>
              <article className="batman-icon-set-article">
                <img
                  className="batman-icon batman-icon-batman"
                  src={require("../../../assets/design/batman/process-0.jpg")}/>
                <img
                  className="batman-icon batman-icon-batman"
                  src={require("../../../assets/design/batman/process-1.svg")}/>
                <img
                  className="batman-icon batman-icon-batman"
                  src={require("../../../assets/design/batman/process-2.jpg")}/>
                <img
                  className="batman-icon batman-icon-batman"
                  src={require("../../../assets/design/batman/batman.svg")}/>
              </article>
            </div>
            <div className="project-description">
              <p className="paragraph-title paragraph-title-two">Icon Set</p>
              <article className="batman-icon-set-article">
                <img
                  className="batman-icon"
                  src={require("../../../assets/design/batman/poison-ivy.svg")}/>
                <img
                  className="batman-icon"
                  src={require("../../../assets/design/batman/catwoman.svg")}/>
                <img
                  className="batman-icon"
                  src={require("../../../assets/design/batman/harley-quinn.svg")}/>
                <img
                  className="batman-icon"
                  src={require("../../../assets/design/batman/joker.svg")}/>
                <img
                  className="batman-icon"
                  src={require("../../../assets/design/batman/two-face.svg")}/>
                <img
                  className="batman-icon"
                  src={require("../../../assets/design/batman/riddler.svg")}/>
              </article>
            </div>
          </section>
        </section>
      </div>
    );
  }
}

export default ComprehensiveLayoutOne;
