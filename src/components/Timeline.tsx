import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faProjectDiagram, faUsers } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Jan 2025 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Full Stack Software Development Co-op</h3>
            <h4 className="vertical-timeline-element-subtitle">Verizon, Basking Ridge, NJ</h4>
            <p>React, HTML/CSS, JavaScript, AI/ML, Product Management</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--leadership"
            date="Sep 2023 - Dec 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faUsers} />}
          >
            <h3 className="vertical-timeline-element-title">External Vice President Committee Officer</h3>
            <h4 className="vertical-timeline-element-subtitle">SHPE, NJIT</h4>
            <p>Corporate Partnerships, Event Planning, Professional Development</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="June 2024 – Aug 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Network Performance Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Verizon, Hempstead, NY</h4>
            <p>Data Optimization, Workflow Automation</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="March 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faProjectDiagram} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineering Virtual Experience</h3>
            <h4 className="vertical-timeline-element-subtitle">Electronic Arts (Forage)</h4>
            <p>Feature Proposal, C++ Class Design, Code Optimization</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="June 2023 – July 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Systems Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">HISPA (Remote)</h4>
            <p>Salesforce, Data Migration, Information Management</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;