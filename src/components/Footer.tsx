import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div className="social-links">
        <a href="https://github.com/MiguelGarcia-SWE" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://linkedin.com/in/miguelanggarcia/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p className="thank-you">Thanks for scrolling through my journey! 🚀</p>
      <p className="credits">Huge credits to <a href="https://github.com/yujisatojr/react-portfolio-template" target="_blank" rel="noreferrer" style={{ textDecoration: 'underline' }}>Yuji Sato</a> for this amazing template</p>
    </footer>
  );
}

export default Footer;