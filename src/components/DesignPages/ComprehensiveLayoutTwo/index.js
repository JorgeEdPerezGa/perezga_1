import React, { Component } from 'react';
import Image from '../../Image';
import './style.css';

class ComprehensiveLayoutTwo extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  goGitHub = () => {
    const repository = 'https://github.com/JorgeEdPerezGa/static-comprehensive-layout-pokemon';
    window.open(`${repository}`);
  }

  goLiveSite = () => {
    const repository = 'https://jorgeedperezga.github.io/static-comprehensive-layout-pokemon/';
    window.open(`${repository}`);
  }

  render() {

    return (
      <div>
        <div className="page-menu-mobile">
          <button
            onClick={() => this.props.history.push('/design')}
            className="show-more">PROJECTS</button>
        </div>
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
          <div className="page-title page-title-long">POKEMON - Character Set And <p className="page-title-second-line">Static Comprehensive Layout</p></div>
          <button
            className="repository-button"
            onClick={this.goGitHub}>Repository Page</button>
          {/* <button
            className="repository-button repository-button-right"
            onClick={this.goLiveSite}>Live Site</button> */}
          <section className="project-section project-section-two">
            <div className="project-description">
              <p className="paragraph-title paragraph-title-two">Description</p>
              <p
                className="page-paragraph page-paragraph-two">
                {`• HTML and CSS responsive static comprehensive layout`}</p>
              <p
                className="page-paragraph page-paragraph-two">
                {`• Original artowork inspired by Pokemon`}</p>
              <p
                className="page-paragraph page-paragraph-two">
                {`• Vector based illustrations`}</p>
            </div>
            <img
              className="pokemon-web-screenshot"
              src={require("../../../assets/design/pokemon/screen-shot.jpg")}/>
            <div className="project-description">
              <p className="paragraph-title paragraph-title-two">Process</p>
              <article className="pokemon-icon-set-article">
                <img
                  className="pokemon-process"
                  src={require("../../../assets/design/pokemon/process-0.jpg")}/>
                <img
                  className="pokemon-process"
                  src={require("../../../assets/design/pokemon/process-1.svg")}/>
                <img
                  className="pokemon-process"
                  src={require("../../../assets/design/pokemon/pikachu.svg")}/>
              </article>
            </div>
            <div className="project-description">
              <p className="paragraph-title paragraph-title-two">Illustration Set</p>
              <article className="pokemon-icon-set-article">
                <img
                  className="pokemon-illustration"
                  src={require("../../../assets/design/pokemon/staryu.svg")}/>
                <img
                  className="pokemon-illustration"
                  src={require("../../../assets/design/pokemon/ditto.svg")}/>
                <img
                  className="pokemon-illustration"
                  src={require("../../../assets/design/pokemon/caterpie.svg")}/>
                <img
                  className="pokemon-illustration"
                  src={require("../../../assets/design/pokemon/evee.svg")}/>
                <img
                  className="pokemon-illustration"
                  src={require("../../../assets/design/pokemon/gastly.svg")}/>
                <img
                  className="pokemon-illustration"
                  src={require("../../../assets/design/pokemon/charmander.svg")}/>
                <img
                  className="pokemon-illustration"
                  src={require("../../../assets/design/pokemon/poliwag.svg")}/>
                <img
                  className="pokemon-illustration pikachu"
                  src={require("../../../assets/design/pokemon/pikachu.svg")}/>

              </article>
            </div>
          </section>
        </section>
      </div>
    );
  }
}

export default ComprehensiveLayoutTwo;
