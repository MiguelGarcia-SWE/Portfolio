import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DownloadIcon from '@mui/icons-material/Download';
import '../assets/styles/Main.scss';
import profileImage from '../assets/images/profile.jpg';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-and-resume">
          <div className="image-wrapper">
            <img src={profileImage} alt="Miguel Garcia" />
          </div>
          <div className="resume-bubble-wrapper">
            <a href="Resume.pdf" download="Miguel_Garcia_Resume_25.pdf" className="resume-bubble">
              <DownloadIcon style={{ verticalAlign: 'middle', marginRight: 6 }} /> Resume
            </a>
          </div>
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/MiguelGarcia-SWE" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://linkedin.com/in/miguelanggarcia/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Miguel Garcia</h1>
          <p className="title">Computer Engineering @ NJIT '27</p>
          <div className="summary">
            <p className="bio">Passionate about software development and technology innovation. Currently pursuing my degree in Computer Engineering at NJIT while gaining hands-on experience in full-stack development. My journey is fueled by curiosity and wanting to learn what's happening under the hood, breaking it apart, and putting it back together even better than before!</p>
          </div>

          <div className="mobile_social_icons">
            <a href="https://github.com/MiguelGarcia-SWE" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://linkedin.com/in/miguelanggarcia/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;