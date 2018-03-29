import React, { Component } from 'react';
import './style.css';

class Welcome extends Component {

  render() {
    const twitter = 'https://twitter.com/JorgeEdPerezGa';
    const github = 'https://github.com/JorgeEdPerezGa';
    const linkedin = 'https://linkedin.com/in/JorgeEdPerezGa';

    return (
      <section className="welcome-main">
        <article className="personal-photo">
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
          <article className="personal-bio">
            <p className="bio-quote">{`Maya Angelou once said, “if one is lucky, a solitary fantasy can totally transform a million realities.”`}</p>
            <p className="bio-text">{`Today, every magical object can be a reality with technology. During my youth, my family and I traveled every year from Mexico City to the United States of America to visit Disneyland. For a long time, I believed every street, city, and state in U.S. was just like Disneyland, and personally that notion was more real than any actual form of the country.`}</p>
              <p className="bio-text">{` I have carried this whimsical blurring of reality with me through adulthood. When I go to the gym, a protein shake becomes so much more than pure powder, but rather, a magic potion that will make me stronger. I became curious about software programming when I was presented with the need to implement it into my artistic body of work. In the study and research of technology, I came across other artists that create enchanted objects: umbrellas that glow when it will rain, so that you do not have to check the weather; shoes that when you click your heels three times, trigger a gps signal that guides you home; and wallets that tighten when your bank account is running low. Through code, I aim to bring innovative ideas to my community, with a magically creative approach.`}</p>
            </article>
        </article>
      </section>
    );
  }
}

export default Welcome;
