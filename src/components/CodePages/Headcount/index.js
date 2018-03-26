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

export default Headcount;
