import React, { Component } from 'react';
import './style.css';

class Contact extends Component{
  render() {
    return (
      <div>
        <section>
          <p className="main-page-title">CONTACT</p>
        </section>
        <section className="contact-left">
          <article className="contact-icon-and-info">
            <img
              className="contact-icon"
              src={require("../../assets/contact/telephone.svg")}/>
            <p className="contact-info">(720) 979 8944</p>
          </article>
        </section>
      </div>
    );
  }
}

export default Contact;
