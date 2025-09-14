import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from "./components/Home.jsx";
import Project from "./components/Project.jsx";
import Contact from "./components/Contact.jsx";
import Certification from "./components/Certification.jsx";
import Experience from './components/Experience.jsx';
import "./styles/App.css";
import "./styles/Roots.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Navbar />
        <main className="content-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Project />} />
            <Route path="/certification" element={<Certification />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
export default App;
