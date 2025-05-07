import React from "react";
import epicGamesImg from '../assets/images/EpicGamesMachine.png';
import qaTesterImg from '../assets/images/QA Tester.png';
import '../assets/styles/GamingHighlights.scss';

function GamingHighlights() {
  return (
    <div className="gaming-highlights-container" id="gaming-highlights">
      <h1>Interest</h1>
      <div className="gaming-highlights-grid">
        <div className="gaming-tile">
          <img src={epicGamesImg} alt="Epic Games Rube Goldberg" className="gaming-img" />
          <div className="gaming-content">
            <h2>Epic Games: Rube Goldberg Challenge & 3D Game Development Externship</h2>
            <p>Embark on an EPIC journey into game design, interactive storytelling, and digital creativity with Epic Games, the creators of Fortnite. In this externship, I designed and built an imaginative 3D Rube Goldberg machine using Unreal Engine—Epic's powerful platform used in games, movies, and VR experiences. Developed practical skills in creative workflows, physics-based mechanics, visual design, and storytelling.</p>
          </div>
        </div>
        <div className="gaming-tile">
          <img src={qaTesterImg} alt="Quality Assurance Tester" className="gaming-img" />
          <div className="gaming-content">
            <h2>Quality Assurance Tester</h2>
            <p>As a Quality Assurance Tester, I rigorously test gameplay features, identify bugs, and provide feedback to ensure a smooth and enjoyable player experience.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GamingHighlights; 