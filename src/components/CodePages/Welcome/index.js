import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class Welcome extends Component {

  render() {
    return (
      <div>
        <section>
          <p>PROJECTS</p>
          <p>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`}</p>
        </section>
        <section className="gallery-section">
          <article>
            <p>HYPERSPACE</p>
            <Link to={"/code/hyperspace"}>
              <div className="hyperspace-image gallery-image"></div>
            </Link>
          </article>
          <article>
            <p>HEADCOUNT</p>
            <div className="headcount-image gallery-image"></div>
          </article>
        </section>
      </div>
    );
  }
}

export default Welcome;
