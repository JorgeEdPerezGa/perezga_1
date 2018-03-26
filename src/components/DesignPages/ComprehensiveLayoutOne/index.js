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
          <section className="project-section">
            <img
              className="batman-web-screenshot"
              src={require("../../../assets/design/batman/screen-shot-0.png")}/>
            <p>{`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.`}</p>
            <p>{`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.`}</p>
            <article className="batman-icon-set-article">
              <img
                className="batman-icon"
                src={require("../../../assets/design/batman/batman.svg")}/>
              <img
                className="batman-icon"
                src={require("../../../assets/design/batman/catwoman.svg")}/>
              <img
                className="batman-icon"
                src={require("../../../assets/design/batman/two-face.svg")}/>
              <img
                className="batman-icon"
                src={require("../../../assets/design/batman/harley-quinn.svg")}/>
              <img
                className="batman-icon"
                src={require("../../../assets/design/batman/poison-ivy.svg")}/>
              <img
                className="batman-icon"
                src={require("../../../assets/design/batman/joker.svg")}/>
              <img
                className="batman-icon"
                src={require("../../../assets/design/batman/riddler.svg")}/>
            </article>
          </section>
        </section>
      </div>
    );
  }
}

export default ComprehensiveLayoutOne;
