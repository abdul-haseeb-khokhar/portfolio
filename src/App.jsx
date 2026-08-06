import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import './index.css';

function App () {
  return (
    <>
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <div className = 'divider'></div>
        <Projects />
        <div className = 'divider'></div>
        <Skills />
        <div className = 'divider'></div>
        <About />
        <div className = 'divider'></div>
        <Experience />
        <div className = 'divider'></div>
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App;
