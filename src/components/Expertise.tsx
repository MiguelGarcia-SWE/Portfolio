import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBook, faCode, faUsers } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import { Api } from "@mui/icons-material";

const relevantCourses = [
    {
        name: "Computer Science 1 & 2 (C++)",
        url: "https://digitalcommons.njit.edu/cgi/viewcontent.cgi?article=1409&context=cs-syllabi"
    },
    {
        name: "Computer Organization and Architecture",
        url: "https://digitalcommons.njit.edu/ece-syllabi/76/"
    },
    {
        name: "Applied Machine Learning",
        url: "https://digitalcommons.njit.edu/cgi/viewcontent.cgi?article=1104&context=ece-syllabi"
    },
    {
        name: "Calculus 3",
        url: "https://digitalcommons.njit.edu/cgi/viewcontent.cgi?article=1285&context=math-syllabi"
    },
    {
        name: "Differential Equations",
        url: "https://docs.google.com/document/d/1o82ikKSCHH3tbaD2hnhsRvigDONmF5gVnA1xCmS3ESo/edit?tab=t.0"
    },
    {
        name: "Linear Algebra",
        url: "https://digitalcommons.njit.edu/math-syllabi/311/"
    },
    {
        name: "Numerical Linear Algebra",
        url: "https://math.njit.edu/sites/math/files/Math%20707%20SP22_0.pdf"
    },
    {
        name: "Computer Graphics for Visual Effects",
        url: "https://digitalcommons.njit.edu/cgi/viewcontent.cgi?article=1423&context=info-syllabi"
    },
    {
        name: "Calculus III B",
        url: "https://archives.njit.edu/vhlib/syllabi/math/math-2024-01-01-Spring-2024/MATH-213-2024-Spring.pdf"
    },
    {
        name: "Discrete Analysis",
        url: "https://digitalcommons.njit.edu/cgi/viewcontent.cgi?article=1207&context=math-syllabi"
    },
    {
        name: "Principles of Operating Systems",
        url: "https://digitalcommons.njit.edu/cgi/viewcontent.cgi?article=1562&context=cs-syllabi"
    }
];

const programmingLanguages = [
    "Python",
    "C/C++",
    "MATLAB",
    "JavaScript",
    "HTML/CSS",
    "Bash"
];

const frameworksAndTools = [
    "React.js",
    "Node.js",
    "PyTorch",
    "OpenCV",
    "NumPy"
];

const toolsAndPlatforms = [
    "Git",
    "Docker",
    "Jira",
    "Ubuntu",
    "Postman",
    "Salesforce",
    "Unreal Engine 5",
    "Blueprint",
    "Jetson Nano",
    "MongoDB"
];

const systemsAndConcepts = [
    "RESTful APIs",
    "Computer Vision",
    "Object Detection (DetectNet)",
    "NLP"
];

const affiliations = [
    "Society of Hispanic Professional Engineers (SHPE)",
    "CodePath",
    "ColorStack",
    "Association of Latino Professionals For America (ALPFA)",
    "Hispanics Inspiring Students' Performance and Achievement (HISPA)"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>About Me</h1>
           
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faGraduationCap} size="3x"/>
                    <h3>Bachelor of Science in Computer Engineering</h3>
                    <p>New Jersey Institute of Technology (NJIT)</p>
                    <p>Minor: Computational Mathematics</p>
                    <div className="flex-chips">
                        <span className="chip-title">Relevant Coursework:</span>
                        {relevantCourses.map((course, index) => (
                            <a 
                                key={index} 
                                href={course.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                style={{ textDecoration: 'none' }}
                            >
                                <Chip 
                                    className='chip clickable-chip' 
                                    label={course.name}
                                    sx={{
                                        '&:hover': {
                                            backgroundColor: '#1976d2',
                                            color: 'white',
                                            cursor: 'pointer'
                                        }
                                    }}
                                />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faCode} size="3x"/>
                    <h3>Languages & Libraries</h3>
                    <div className="flex-chips">
                        {programmingLanguages.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                    <h3>Frameworks & Libraries</h3>
                    <div className="flex-chips">
                        {frameworksAndTools.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                    <h3>Tools & Platforms</h3>
                    <div className="flex-chips">
                        {toolsAndPlatforms.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                    <h3>Systems & Concepts</h3>
                    <div className="flex-chips">
                        {systemsAndConcepts.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faUsers} size="3x"/>
                    <h3>Affiliations</h3>
                    <div className="flex-chips">
                        {affiliations.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;