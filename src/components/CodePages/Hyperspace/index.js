import React, { Component } from 'react';
import Image from '../../Image';
import TechnologyLogo from '../../TechnologyLogo';
import './style.css';

class Hyperspace extends Component {
  constructor() {
    super();
    this.state = {
      images_set_0: [
        'https://github.com/JorgeEdPerezGa/hyperspace/raw/master/public/screenshots/1.png'
      ],
      images_set_1: [
        'https://github.com/JorgeEdPerezGa/hyperspace/blob/master/public/screenshots/2.png',
        'https://github.com/JorgeEdPerezGa/hyperspace/raw/master/public/screenshots/4.png',
        'https://github.com/JorgeEdPerezGa/hyperspace/raw/master/public/screenshots/3.gif',
        'https://github.com/JorgeEdPerezGa/hyperspace/raw/master/public/screenshots/3.png',
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
            className="technology-icon git-icon"
            src={require("../../../assets/technologies/gitLogo.svg")}/>
          <img
            className="technology-icon"
            src={require("../../../assets/technologies/illustrator.svg")}/>
        </section>
        <section>
          <div className="hyperspace-logo"></div>
          <p>HYPERSPACE</p>
          <div className>
            <p>{`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.`}</p>
          </div>
          <button
            className="repository-button"
            onClick={this.goGitHub}>Repository Page</button>
          <section className="project-section">
            {this.displaySet0()}
            <p>{`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.`}</p>
            {this.displaySet1()}
          </section>
        </section>
      </div>
    );
  }
}

export default Hyperspace;
