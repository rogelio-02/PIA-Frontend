import React from 'react';

const Skills = () => {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "SQL", "Git"];

  return (
    <section id="skills">
      <div className="container">
        <h2 className="title">Skills</h2>
        <p className="subtitle">Tecnologías que utilizo</p>

        <div className="skills-grid">
          {skills.map(skill => (
            <div className="skill card" key={skill}>{skill}</div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
