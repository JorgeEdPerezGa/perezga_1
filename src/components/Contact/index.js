import React, { Component } from 'react';
import './style.css';

class Contact extends Component{
  render() {
    const twitter = 'https://twitter.com/JorgeEdPerezGa';
    const github = 'https://github.com/JorgeEdPerezGa';
    const linkedin = 'https://linkedin.com/in/JorgeEdPerezGa';
    return (
      <div className="contact">
        <section className="contact-left">
          <article className="media-icon-article">
            <img
              onClick={() => window.open(`${linkedin}`) }
              className="media-icon"
              src={require("../../assets/media/linkedin-color.svg")}/>
            <img
              onClick={() => window.open(`${github}`) }
              className="media-icon"
              src={require("../../assets/media/github-color.svg")}/>
            <img
              onClick={() => window.open(`${twitter}`) }
              className="media-icon"
              src={require("../../assets/media/twitter-color.svg")}/>
          </article>
          <section>
            <div className="page-title page-title-contact">CONTACT</div>
          </section>
          <article className="contact-icon-and-info">
            <img
              className="contact-icon"
              src={require("../../assets/contact/telephone.svg")}/>
            <p className="contact-info">(720) 979 8944</p>
          </article>
          <article className="contact-icon-and-info">
            <img
              className="contact-icon email-icon"
              src={require("../../assets/contact/email.svg")}/>
            <p className="contact-info">PEREZGA@ICLOUD.COM</p>
          </article>
          <a
            href={require("../../assets/contact/resume.pdf")}
            target="_blank">
            <button
              className="contact-button">RESUME
            </button>
          </a>
        </section>
      </div>
    );
  }
}

export default Contact;
