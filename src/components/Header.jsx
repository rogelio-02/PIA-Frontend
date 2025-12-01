import React, { useState, useEffect } from 'react';

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const resetMenu = () => {
    setMenuActive(false);
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        resetMenu();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <header>
      <nav className="nav">
        <div className="logo">Sergio Canales</div>
        <button
          className="menu-btn"
          id="menuBtn"
          aria-label={menuActive ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
          aria-expanded={menuActive}
          aria-controls="navMenu"
          onClick={toggleMenu}
        >
          <span aria-hidden="true">{menuActive ? '✕' : '☰'}</span>
        </button>

        <div className={`nav-menu ${menuActive ? 'active' : ''}`} id="navMenu" role="menu">
          <a href="#about" role="menuitem" onClick={resetMenu}>Sobre mí</a>
          <a href="#projects" role="menuitem" onClick={resetMenu}>Proyectos</a>
          <a href="#skills" role="menuitem" onClick={resetMenu}>Skills</a>
          <a href="#contact" role="menuitem" onClick={resetMenu}>Contacto</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
