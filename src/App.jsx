import Navbar from './components/Navbar.jsx';
import HomePage from './pages/HomePage.jsx';

import "./styles/App.css";
import "./styles/Roots.css";

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main className="content-wrapper">
        <HomePage />
      </main>
    </div>
  );
}

export default App;