document.addEventListener("DOMContentLoaded", () => {

  // Cargar HEADER
  fetch("header.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("header-container").innerHTML = data;

      // ⏳ Esperar a que el DOM inserte el header
      setTimeout(() => {
        marcarPaginaActiva();
      }, 50);
    });

  // Cargar FOOTER
  fetch("footer.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("footer-container").innerHTML = data;
    });

});

function marcarPaginaActiva() {

  const links = document.querySelectorAll(".menu-principal a");
  let rutaActual = window.location.pathname.split("/").pop();

  if (rutaActual === "") {
    rutaActual = "index.html";
  }

  // 🔥 lista de páginas de carreras
  const paginasCarreras = [
    "comercio.html",
    "itiiid.html",
    "manejo-recursos.html",
    "petrolera.html",
    "turismo.html"
  ];

  links.forEach(link => {

    const href = link.getAttribute("href");

    if (!href || href === "#") return;

    // ✅ CASO NORMAL
    if (href === rutaActual) {

      link.classList.add("activo");

      const submenu = link.closest(".submenu");
      if (submenu) {
        const padre = submenu.querySelector("a");
        if (padre) padre.classList.add("activo");
      }

    }

    // 🔥 CASO ESPECIAL: CARRERAS → marcar "Oferta Educativa"
    if (href === "carreras.html" && paginasCarreras.includes(rutaActual)) {
      link.classList.add("activo");
    }

  });

}