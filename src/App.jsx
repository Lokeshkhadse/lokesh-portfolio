import Header from './components/Header';
import Hero from './components/Hero';
import './App.css';
import SocialIcons from './components/SocialIcons';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Projects from './components/Projects';
import ProjectDetails from './components/ProjectDetails';
// import BlogSection from './components/BlogSection.jsx';
import Education from './components/Education.jsx';
import Contact from './components/Contact.jsx';
import { useState } from "react";
import { Analytics } from "@vercel/analytics/react"

function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  return (
    <div className="min-h-screen text-gray-100">
      <Header />
      <div className="overflow-x-hidden"> 
        <Hero />
        <SocialIcons />
        <About />
        <Experience />
        <Skills />
        <Projects openModal={openModal} setOpenModal={setOpenModal}  />
        {/* <BlogSection /> */}
        <Education />
        <Contact />
        <Analytics/>
        <hr className="mt-16 border-gray-600" />
        <Footer />
      </div>
      {openModal.state &&
        <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
      }
    </div>
  );
}

export default App;