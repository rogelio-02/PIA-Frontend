document.addEventListener("DOMContentLoaded", () => {

  // Toggle menú móvil
  const menuBtn = document.getElementById("menuBtn");
  const navMenu = document.getElementById("navMenu");

  const resetMenu = () => {
    navMenu.classList.remove("active");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.setAttribute("aria-label", "Abrir menú de navegación");
    const icon = menuBtn.querySelector("span");
    icon.textContent = "☰";
  }

  menuBtn.addEventListener("click", () => {
    const isExpanded = navMenu.classList.toggle("active");
    if (isExpanded) {
      menuBtn.setAttribute("aria-expanded", "true");
      menuBtn.setAttribute("aria-label", "Cerrar menú de navegación");
      const icon = menuBtn.querySelector("span");
      icon.textContent = "✕";
    } else {
      resetMenu();
    }
  });

  // Evento "Ver más" de cada proyecto
  const projectBtns = document.querySelectorAll(".project-more");

  projectBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const title = btn.parentElement.querySelector(".project-title").textContent;
      alert("Más información sobre: " + title);
    });
  });

  // Close mobile menu on resize
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      resetMenu();
    }
  });
});