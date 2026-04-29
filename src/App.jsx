import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './index.css';

function App () {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className = 'divider'></div>
        <About />
        <div className = 'divider'></div>
        <Skills />
        <div className = 'divider'></div>
        <Projects />
        <div className = 'divider'></div>
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App;