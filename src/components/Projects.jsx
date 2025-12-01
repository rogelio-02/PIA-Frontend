import React from 'react';
import { projectsData } from '../data';

const Projects = ({ openModal }) => {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="title">Proyectos</h2>
        <p className="subtitle">Algunos proyectos destacados</p>

        <div className="projects-grid">
          {projectsData.map(project => (
            <article className="project-card card" key={project.id}>
              <figure>
                <div className="project-card__image-container">
                  <img src={project.img} alt={`Preview del proyecto ${project.title}`} width="400" height="267" loading="lazy" />
                </div>
                <figcaption>
                  <h3 className="project-title" id={project.id}>{project.title}</h3>
                  <p className="project-desc">{project.desc}</p>
                </figcaption>
              </figure>
              <button className="btn-secondary project-more" aria-labelledby={project.id} onClick={() => openModal(project)}>Ver más</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
