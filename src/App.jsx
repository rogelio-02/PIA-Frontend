import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects openModal={openModal} />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <ProjectModal project={selectedProject} closeModal={closeModal} />
    </>
  );
}

export default App;
