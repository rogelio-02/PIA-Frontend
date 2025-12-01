import React from 'react';

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <h2 className="title">Sobre mí</h2>
        <p className="subtitle">Apasionado por construir productos digitales con un diseño simple, funcional y responsivo.</p>

        <div className="about-grid">
          <img src="/img/canales.jpg" alt="Foto de Sergio Canales" width="420" height="685" />

          <div>
            <p>Soy un desarrollador Full Stack centrado en la creación de interfaces limpias y APIs eficientes. Me encanta resolver problemas reales usando tecnologías modernas, siguiendo buenas prácticas y manteniendo un enfoque minimalista en el diseño.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
