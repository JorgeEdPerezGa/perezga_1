import React, { Component } from 'react';
import Image from '../../Image';
import './style.css';

class Headcount extends Component {
  constructor() {
    super();
    this.state = {
      images_set_0: [
        ''
      ],
      images_set_1: [
        ''
      ]
    };
  }

  goGitHub = () => {
    const repository = 'https://github.com/JorgeEdPerezGa/headcount';
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
          <div className="page-title">HEADCOUNT</div>
          <button
            className="repository-button"
            onClick={this.goGitHub}>Repository Page</button>
          <section className="project-section">
            <img
              className="image"
              src={require("../../../assets/code/headcount/headcount.gif")}/>
            <div className="project-description">
              <p className="paragraph-title">Synopsis</p>
              <p className="page-paragraph">{`HEADCOUNT, an educational district counter, keeps track of institutional statistics in the state on Colorado. Teachers and parents are able to analyze student data by district, year, and percentage, and select districts' information to be compared side by side.`}</p>
            </div>
            <div className="project-description">
              <p className="paragraph-title">Project Goals</p>
              <p
                className="page-paragraph">
                {`• Create modular React components`}</p>
              <p
                className="page-paragraph">
                {`• Write meaningful, comprehensive unit tests`}</p>
              <p
                className="page-paragraph">
                {`• Use propTypes to validate props passed to each component`}</p>
              <p
                className="page-paragraph">
                {`• UI should change to reflect the data provided by the file selected`}</p>
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
            <img
              className="image"
              src={require("../../../assets/code/headcount/screen-shot-0.png")}/>
            <img
              className="image"
              src={require("../../../assets/code/headcount/screen-shot-1.png")}/>
            <img
              className="image"
              src={require("../../../assets/code/headcount/screen-shot-2.png")}/>
            <img
              className="image"
              src={require("../../../assets/code/headcount/screen-shot-3.png")}/>
            <img
              className="image"
              src={require("../../../assets/code/headcount/screen-shot-4.png")}/>
            {this.displaySet1()}
          </section>
        </section>
      </div>
    );
  }
}

export default Headcount;
