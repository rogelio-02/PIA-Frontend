document.addEventListener("DOMContentLoaded", () => {

  // Toggle menú móvil
  const menuBtn = document.getElementById("menuBtn");
  const navMenu = document.getElementById("navMenu");

  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    menuBtn.textContent = navMenu.classList.contains("active") ? "✕" : "☰";
  });

  // Evento "Ver más" de cada proyecto
  const projectBtns = document.querySelectorAll(".project-more");

  projectBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const title = btn.parentElement.querySelector(".project-title").textContent;
      alert("Más información sobre: " + title);
    });
  });

});
