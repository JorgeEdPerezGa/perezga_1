import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class Welcome extends Component {

  render() {
    return (
      <div>
        <section>
          <p className="main-page-title">PROJECTS</p>
        </section>
        <section className="gallery-section">
          <article className="gallery-article">
            <p className="main-page-project-title">BATMAN</p>
            <Link to={"/design/comp-one"}>
              <div className="batman-image gallery-image"></div>
            </Link>
          </article>
          <article className="gallery-article">
            <p className="main-page-project-title">POKEMON</p>
            <Link to={"/design/comp-two"}>
              <div className="pokemon-image gallery-image"></div>
            </Link>
          </article>
        </section>
      </div>
    );
  }
}

export default Welcome;
