import React from "react";
import raytracingImg from '../assets/images/Ray.jpg';
import obstacleImg from '../assets/images/Object Detect.jpeg';
import shieldImg from '../assets/images/PCB.jpeg';
import chatbotImg from '../assets/images/CHatbot.png';
import rubeGoldbergImg from '../assets/images/rube-goldberg-header-2.png.png';
import pcBuilderImg from '../assets/images/PC.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/MiguelGarcia-SWE/RayTracing" target="_blank" rel="noreferrer"><img src={raytracingImg} className="zoom" alt="RayTracing Screenshot" width="100%"/></a>
                <a href="https://github.com/MiguelGarcia-SWE/RayTracing" target="_blank" rel="noreferrer"><h2>RayTracing Project</h2></a>
                <p>Building an exciting C++ path tracer from scratch to create stunning realistic lighting and explore the world of graphics programming!✨</p>
            </div>
            <div className="project">
                <a href="https://github.com/MiguelGarcia-SWE/Autonomous-Obstacle-Recognition" target="_blank" rel="noreferrer"><img src={obstacleImg} className="zoom" alt="Obstacle Simulation Screenshot" width="100%"/></a>
                <a href="https://github.com/MiguelGarcia-SWE/Autonomous-Obstacle-Recognition" target="_blank" rel="noreferrer"><h2>Real-Time Obstacle Avoidance Simulation System</h2></a>
                <p>Created a real-time obstacle avoidance simulator using Jetson Orin Nano and Python.</p>
            </div>
            <div className="project">
                <a href="https://github.com/MiguelGarcia-SWE/Shield-Board" target="_blank" rel="noreferrer"><img src={shieldImg} className="zoom" alt="Shield Board PCB" width="100%"/></a>
                <a href="https://github.com/MiguelGarcia-SWE/Shield-Board" target="_blank" rel="noreferrer"><h2>Shield Board for Power Distribution</h2></a>
                <p>Designed a 2-layer PCB shield board for power distribution using Altium Designer.</p>
            </div>
            <div className="project">
                <a href="https://github.com/MiguelGarcia-SWE/Chatbot" target="_blank" rel="noreferrer"><img src={chatbotImg} className="zoom" alt="Chatbot Screenshot" width="100%"/></a>
                <a href="https://github.com/MiguelGarcia-SWE/Chatbot" target="_blank" rel="noreferrer"><h2>Intelligent Question Answering System</h2></a>
                <p>Built a Python-based QA system using GPT-3.5 for advanced NLP tasks.</p>
            </div>
            <div className="project">
                <a href="#" target="_blank" rel="noreferrer"><img src={rubeGoldbergImg} className="zoom" alt="Rube Goldberg Machine Screenshot" width="100%"/></a>
                <a href="#" target="_blank" rel="noreferrer"><h2>My Rube Goldberg Machine</h2></a>
                <p>Currently working on this project during my externship, it is my unique take and rendition of the renowned Rube Goldberg machine in Unreal Engine 5.</p>
            </div>
            <div className="project">
                <a href="#" target="_blank" rel="noreferrer"><img src={pcBuilderImg} className="zoom" alt="PC Builder Project" width="100%"/></a>
                <a href="#" target="_blank" rel="noreferrer"><h2>PC Builder Project</h2></a>
                <p>Custom gaming PC build featuring 32GB 3200MHz RAM, Ryzen 5600X processor, and a RTX 3070 FE graphics card with a 18-hour Best Buy camping session during peak COVID to accompany the purchase :) (worth it). Built for optimal performance and reliability.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;