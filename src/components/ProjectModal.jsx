import React, { useEffect } from 'react';

const ProjectModal = ({ project, closeModal }) => {
  if (!project) {
    return null;
  }

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [closeModal]);


  return (
    <div id="project-modal" className="modal-overlay" style={{ display: 'flex' }} onClick={(e) => {
      if (e.target.id === "project-modal") {
        closeModal();
      }
    }}>
      <div className="modal-content">
        <button id="modal-close-btn" className="modal-close-btn" onClick={closeModal}>×</button>
        <img id="modal-img" src={project.img} alt={`Preview del proyecto ${project.title}`} />
        <h3 id="modal-title">{project.title}</h3>
        <p id="modal-desc">{project.fullDesc}</p>
        <div id="modal-links">
          <a id="modal-live-link" href={project.live} className="btn-primary" target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
          <a id="modal-repo-link" href={project.repo} className="btn-secondary" target="_blank" rel="noopener noreferrer">Ver Repositorio</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
