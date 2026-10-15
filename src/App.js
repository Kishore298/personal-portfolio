import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Stats from './components/Stats';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import ParticleBackground from './components/ParticleBackground';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="App bg-black min-h-screen text-white">
      {/* Background & Interactive Elements */}
      <CustomCursor />
      <ParticleBackground />
      <div className="grid-overlay" />
      <div className="scanline" />
      <div className="aurora-bg">

        <div className="aurora-blob aurora-1" />
        <div className="aurora-blob aurora-2" />
        <div className="aurora-blob aurora-3" />
      </div>

      {/* Main Content Sections */}
      <NavBar />
      <main>
        <Home />
        <Stats />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
