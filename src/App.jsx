import Navbar from './components/Navbar.jsx';
import HomePage from './pages/HomePage.jsx';
import ScrollToTopButton from './components/ScrollToTopButton.jsx';
import Chatbot from './components/Chatbot.jsx';
import Footer from './components/Footer.jsx';

import "./styles/App.css";
import "./styles/Roots.css";

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main className="content-wrapper">
        <HomePage />
      </main>
      <div className="floating-actions-container">
        <Chatbot />
        <ScrollToTopButton />
      </div>
      <Footer />
    </div>
  );
}

export default App;