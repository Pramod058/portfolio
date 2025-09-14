import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { data } from '../data/portfolioData';
import '../styles/Footer.css';

function Footer() {
  const { name, email, phone, linkedin, github } = data.personalInfo;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="footer-separator"></div>
      <div className="footer-container">
        
        <div className="footer-column footer-brand">
          <h4>{name}</h4>
          <p>&copy; {currentYear} Pramod Aryal. All Rights Reserved.</p>
        </div>

        <div className="footer-column footer-contact">
          <h4>Contact Me</h4>
          <p><a href={`mailto:${email}`}>{email}</a></p>
          <p><a href={`tel:${phone.replace(/\s/g, '')}`}>{phone}</a></p>
        </div>

        <div className="footer-column footer-social">
          <h4>Follow Me</h4>
          <div className="footer-social-links">
            <a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          </div>
      
        </div>

      </div>
          <div className="footer-flags">
            <img src="public\assets\Nepal.gif" alt="Nepal Flag" className="flag-icon" />
            <img src="public\assets\Korea.gif" alt="South Korea Flag" className="flag-icon" />
          </div>
    </footer>
  );
}

export default Footer;