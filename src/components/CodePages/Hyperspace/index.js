import React, { Component } from 'react';
import Image from '../../Image';
import './style.css';

class Hyperspace extends Component {
  constructor() {
    super();
    this.state = {
      images_set_0: [
        'https://github.com/JorgeEdPerezGa/hyperspace/raw/master/public/screenshots/1.png'
      ],
      images_set_1: [
        'https://github.com/JorgeEdPerezGa/hyperspace/raw/master/public/screenshots/2.png',
        'https://github.com/JorgeEdPerezGa/hyperspace/raw/master/public/screenshots/4.png',
        'https://github.com/JorgeEdPerezGa/hyperspace/raw/master/public/screenshots/3.png',
        'https://github.com/JorgeEdPerezGa/hyperspace/raw/master/public/screenshots/3.gif',
        'https://github.com/JorgeEdPerezGa/hyperspace/raw/master/public/screenshots/4.gif'
      ]

    };
  }

  goGitHub = () => {
    const repository = 'https://github.com/JorgeEdPerezGa/hyperspace';
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
            src={require("../../../assets/technologies/firebase.svg")}/>
          <img
            className="technology-icon"
            src={require("../../../assets/technologies/jestlogo.svg")}/>
          <img
            className="technology-icon git-icon"
            src={require("../../../assets/technologies/gitLogo.svg")}/>
          <img
            className="technology-icon"
            src={require("../../../assets/technologies/illustrator.svg")}/>
        </section>
        <section>
          <div className="page-title">HYPERSPACE</div>
          <button
            className="repository-button"
            onClick={this.goGitHub}>Repository Page</button>
          <section className="project-section">
            {this.displaySet0()}
            <div className="project-description">
              <p className="paragraph-title">Synopsis</p>
              <p className="page-paragraph">{`HYPERSPACE is a web application for artists. A solo project that offers users the ability to create, complete, and undo complete tasks, browse current bodies of work that are a part of the Harvard Art Museums' collection, and personalize showcards (post cards) to promote upcoming exhibitions.`}</p>
              <p className="page-paragraph">{`The application registers and logins users through firebase google authentication.`}</p>
            </div>
            <div className="project-description">
              <p className="paragraph-title">Project Goals</p>
              <p
                className="page-paragraph">
                {`• Incorporate gallery infinite scroll, fetch next when reaching last`}</p>
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
              <p className="paragraph-title">Contributor</p>
              <p
                className="page-paragraph">
                Jorge Ed PerezGa - https://github.com/JorgeEdPerezGa</p>
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

export default Hyperspace;
