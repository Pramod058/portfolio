import Home from '../components/Home';
import About from '../components/About';
import Project from '../components/Project';
import Certification from '../components/Certification';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

function HomePage() {
  return (
    <>
      <Home />
      <section id="about"> 
        <About />
      </section>
      <section id="projects">
        <Project />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="certifications">
        <Certification />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

export default HomePage;