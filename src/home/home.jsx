import React, { Component } from 'react';

class Home extends Component {

  render() {
    return (
      <div className="home-container">
        <div className="title-container">
          <div className="title-name">MARK STANLEIGH</div>
          <div className="title-job-title">STORY ARTIST</div>
        </div>
        <div className="home-hero-img"></div>
        <div className="home-links-container">
          <div className="sticky yellow-sticky">
            <div className="yellow-title">STORYBOARDS</div>
            <div className="yellow-links">
              <div className="link-item">
                <a href="">WILLOUGHBY'S</a>
              </div>
              <div className="link-item">
                <a href="">TEN LIVES</a>
              </div>
              <div className="link-item">
                <a href="">TRANSFORMERS</a>
              </div>
              <div className="link-item">
                <a href="">DRAGONS</a>
              </div>
            </div>
          </div>
          <div className="sticky pink-sticky">
            <div className="pink-title">DIRECTING</div>
            <div className="pink-links">
            <a href="">MUSIC VIDEOS</a>
            </div>
          </div>
          <div className="sticky resume-sticky">
            <div className="resume-title">RESUME</div>
          </div>
          <div className="sticky about-sticky">
            <div className="about-title">ABOUT</div>
          </div>
          <div className="sticky green-sticky">
            <div className="green-title">CONTACT</div>
            <div className="green-links">
            <a href="">EMAIL</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default Home;