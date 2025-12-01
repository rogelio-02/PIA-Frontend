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

  // Close mobile menu on resize
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      resetMenu();
    }
  });

  // Modal
  const modal = document.getElementById("project-modal");
  const modalCloseBtn = document.getElementById("modal-close-btn");
  const modalImg = document.getElementById("modal-img");
  const modalTitle = document.getElementById("modal-title");
  const modalDesc = document.getElementById("modal-desc");
  const modalLiveLink = document.getElementById("modal-live-link");
  const modalRepoLink = document.getElementById("modal-repo-link");
  const projectBtns = document.querySelectorAll(".project-more");

  const projectsData = [
    {
      id: "project-title-1",
      img: "img/foto1.jpg",
      title: "Dashboard Minimalista",
      desc: "Sistema de gestión con autenticación y gráficos dinámicos. Construido con React, Node.js y una base de datos SQL.",
      live: "#",
      repo: "#",
    },
    {
      id: "project-title-2",
      img: "img/foto2.jpg",
      title: "E-commerce Simple",
      desc: "Catálogo de productos, carrito de compras y un backend completo para la gestión de pedidos y usuarios. Desarrollado con Express y una API RESTful.",
      live: "#",
      repo: "#",
    },
    {
      id: "project-title-3",
      img: "img/foto3.jpg",
      title: "Landing Page Pro",
      desc: "Landing page elegante, rápida y totalmente responsiva. Optimizada para SEO y un alto rendimiento.",
      live: "#",
      repo: "#",
    },
  ];

  const openModal = (project) => {
    modalImg.src = project.img;
    modalImg.alt = `Preview del proyecto ${project.title}`;
    modalTitle.textContent = project.title;
    modalDesc.textContent = project.desc;
    modalLiveLink.href = project.live;
    modalRepoLink.href = project.repo;
    modal.style.display = "flex";
  };

  const closeModal = () => {
    modal.style.display = "none";
  };

  projectBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const projectId = btn.getAttribute("aria-labelledby");
      const project = projectsData.find(p => p.id === projectId);
      if (project) {
        openModal(project);
      }
    });
  });

  modalCloseBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.style.display === "flex") {
      closeModal();
    }
  });
});
