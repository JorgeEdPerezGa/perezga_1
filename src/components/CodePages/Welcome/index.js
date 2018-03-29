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
            <p className="main-page-project-title">HYPERSPACE</p>
            <Link to={"/code/hyperspace"}>
              <div className="hyperspace-image gallery-image"></div>
            </Link>
          </article>
          <article className="gallery-article">
            <p className="main-page-project-title">HEADCOUNT</p>
            <Link to={"/code/headcount"}>
              <div className="headcount-image gallery-image"></div>
            </Link>
          </article>
          <article className="gallery-article">
            <p className="main-page-project-title">MOVIE TRACKER</p>
            <Link to={"/code/movie-tracker"}>
              <div className="movie-tracker-image gallery-image"></div>
            </Link>
          </article>
          <article className="gallery-article">
            <p className="main-page-project-title">WEATHERLY</p>
            <Link to={"/code/movie-tracker"}>
              <div className="weatherly-image gallery-image"></div>
            </Link>
          </article>
        </section>
      </div>
    );
  }
}

export default Welcome;
