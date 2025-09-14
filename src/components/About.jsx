import { data } from '../data/portfolioData';
import '../styles/About.css';

function About() {
  const { title, description, image } = data.aboutMe;

  return (
    <div className="section-container">
      <h1 className="page-title">{title}</h1>
      <div className="about-content-wrapper">
        <div className="about-image-container">
          <img src={image} alt="Pramod Aryal" className="about-image" />
        </div>
        <div className="about-text-container">
          {description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;