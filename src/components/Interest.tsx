import React from "react";
import epicGamesImg from '../assets/images/EpicGamesMachine.png';
import qaTesterImg from '../assets/images/QA Tester.png';
import '../assets/styles/Interest.scss';

function Interest() {
    return(
    <div className="projects-container" id="interest">
        <h1>Interest</h1>
        <div className="projects-grid">
            <div className="project">
                <img src={epicGamesImg} className="zoom" alt="Epic Games Rube Goldberg" width="100%"/>
                <h2>Epic Games: Rube Goldberg Challenge & 3D Game Development Externship</h2>
                <p>During this externship, I am actively working on designing and building a unique 3D Rube Goldberg machine using Unreal Engine. This hands-on experience with Epic Games has allowed me to dive deep into game design, creative workflows, physics-based mechanics, and interactive storytelling, while collaborating with other passionate developers and learning industry-standard tools.</p>
            </div>
            <div className="project">
                <img src={qaTesterImg} className="zoom" alt="Quality Assurance Tester" width="100%"/>
                <h2>Quality Assurance Tester</h2>
                <p>As a Quality Assurance Tester, I rigorously test gameplay features, identify bugs, and provide feedback to ensure a smooth and enjoyable player experience.</p>
                <p style={{marginTop: '8px'}}>Currently testing: <a href="https://store.steampowered.com/app/2629670/?snr=1_5_9__205" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: '#ffb84d', fontWeight: 600 }}>Life Blood</a></p>
            </div>
        </div>
    </div>
    );
}

export default Interest; 