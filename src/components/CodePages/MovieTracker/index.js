import React, { Component } from 'react';
import Image from '../../Image';
import './style.css';

class MovieTracker extends Component {
  constructor() {
    super();
    this.state = {
      images_set_0: [
        'https://github.com/JorgeEdPerezGa/movie-tracker/raw/master/public/1.gif'
      ],
      images_set_1: [
        'https://github.com/JorgeEdPerezGa/movie-tracker/raw/master/public/MovieTrackerScreenshot.png'
      ]
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  goGitHub = () => {
    const repository = 'https://github.com/JorgeEdPerezGa/movie-tracker';
    window.open(`${repository}`);
  }

  displaySet0 = () => {
    return this.state.images_set_0.map((image, index) => {
      return (
        <Image
          key={index}
          image={image}/>
      );
    });
  }

  displaySet1 = () => {
    return this.state.images_set_1.map((image, index) => {
      return (
        <Image
          key={index}
          image={image}/>
      );
    });
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
            className="technology-icon react-icon"
            src={require("../../../assets/technologies/reactlogo.svg")}/>
          <img
            className="technology-icon"
            src={require("../../../assets/technologies/reduxlogo.svg")}/>
          <img
            className="technology-icon router-icon"
            src={require("../../../assets/technologies/routerlogo.svg")}/>
          <img
            className="technology-icon sass-icon"
            src={require("../../../assets/technologies/sasslogo.svg")}/>
          <img
            className="technology-icon"
            src={require("../../../assets/technologies/jestlogo.svg")}/>
          <img
            className="technology-icon git-icon"
            src={require("../../../assets/technologies/gitLogo.svg")}/>
        </section>
        <section>
          <div className="page-title">MOVIE TRACKER</div>
          <button
            className="repository-button"
            onClick={this.goGitHub}>Repository Page</button>
          <section className="project-section">
            {this.displaySet0()}
            <div className="project-description">
              <p className="paragraph-title">Synopsis</p>
              <p className="page-paragraph">{`Movie Tracker is a group project that works off The Movie DB API and incorporates our own API to save user information. We had one week to build an application that pulled in the most recent movies from The Movie DB API. Our API allows a user to register and then log in when they return.`}</p>
              <p className="page-paragraph">{`A user can favorite movies, which is then saved in our API so that user can view their list when they log in again. We also did a project extension where a user can click and view more details about any individual movie. The application was built in React and Redux. Testing suites were built using Jest and Enzyme.`}</p>
            </div>
            <div className="project-description">
              <p className="paragraph-title">Project Goals</p>
              <p
                className="page-paragraph">
                {`• Create modular React components`}</p>
              <p
                className="page-paragraph">
                {`• Connect components to Redux store`}</p>
              <p
                className="page-paragraph">
                {`• Test components from both a unit and acceptance standpoint`}</p>
              <p
                className="page-paragraph">
                {`• Design an appealing and user friendly app`}</p>
            </div>
            <div className="project-description">
              <p className="paragraph-title">Contributors</p>
              <p
                className="page-paragraph">
                Jorge Ed PerezGa - github.com/JorgeEdPerezGa</p>
              <p
                className="page-paragraph">
                Amanda Tjan - github.com/soytjan</p>
              <p
                className="page-paragraph">
                James Logue - github.com/jjlljj</p>
            </div>
            <div className="project-description">
              <p className="paragraph-title">Project Layout</p>
            </div>
            {this.displaySet1()}
          </section>
        </section>
      </div>
    );
  }
}

export default MovieTracker;
