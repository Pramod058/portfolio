import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import { data } from '../data/portfolioData';
import '../styles/Navbar.css';

function Navbar() {
  const { name } = data.personalInfo;
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleSectionScroll = () => {
      const sections = ['about', 'projects', 'experience', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 150;

      if (window.scrollY < 400) {
        setActiveSection('home');
        return;
      }

      for (const id of sections) {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleSectionScroll);
    return () => window.removeEventListener('scroll', handleSectionScroll);
  }, []);

  useEffect(() => {
    const handleProgressScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleProgressScroll);
    return () => window.removeEventListener('scroll', handleProgressScroll);
  }, []);


  const smoothScrollTo = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const getNavLinkClass = (sectionId) => {
    return activeSection === sectionId ? 'nav-link active' : 'nav-link';
  };

  return (
    <header className="navbar-header">
      <nav className="navbar-container">
        <a href="#home" onClick={(e) => smoothScrollTo(e, 'home')} className="navbar-logo">
          {name}
        </a>
        <div className="navbar-links">
          <a href="#home" onClick={(e) => smoothScrollTo(e, 'home')} className={getNavLinkClass('home')}>
            Home
          </a>
          <a href="#about" onClick={(e) => smoothScrollTo(e, 'about')} className={getNavLinkClass('about')}>
            About
          </a>
          <a href="#projects" onClick={(e) => smoothScrollTo(e, 'projects')} className={getNavLinkClass('projects')}>
            Projects
          </a>
          <a href="#experience" onClick={(e) => smoothScrollTo(e, 'experience')} className={getNavLinkClass('experience')}>
            Experience
          </a>
          <a href="#certifications" onClick={(e) => smoothScrollTo(e, 'certifications')} className={getNavLinkClass('certifications')}>
            Certifications
          </a>
          <a href="#contact" onClick={(e) => smoothScrollTo(e, 'contact')} className={getNavLinkClass('contact')}>
            Contact
          </a>
        </div>
        <ThemeToggle />
      </nav>
      <div className="progress-bar-container">
        <div className="progress-bar-fill" style={{ width: `${scrollProgress}%` }}></div>
      </div>
    </header>
  );
}

export default Navbar;