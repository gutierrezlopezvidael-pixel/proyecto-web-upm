// ============================
// FAQ
// ============================

const preguntas = document.querySelectorAll(".faq-pregunta");

if (preguntas.length > 0) {
  preguntas.forEach(pregunta => {
    pregunta.addEventListener("click", () => {
      const item = pregunta.parentElement;
      item.classList.toggle("activo");
    });
  });
}


// ============================
// SUBMENU EN CELULAR
// ============================

const submenus = document.querySelectorAll(".submenu > a");

if (submenus.length > 0) {
  submenus.forEach(menu => {
    menu.addEventListener("click", function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        this.parentElement.classList.toggle("active");
      }
    });
  });
}


// ============================
// SLIDER AUTOMÁTICO
// ============================

const slides = document.querySelectorAll(".slide");

if (slides.length > 0) {

  let index = 0;

  function cambiarSlide() {
    slides[index].classList.remove("active");

    index++;

    if (index >= slides.length) {
      index = 0;
    }

    slides[index].classList.add("active");
  }

  setInterval(cambiarSlide, 5000);
}


// ============================
// CARRUSEL
// ============================

const contenedor = document.querySelector(".contenedor-imagenes");
const btnIzq = document.querySelector(".flecha.izquierda");
const btnDer = document.querySelector(".flecha.derecha");

if (contenedor && btnIzq && btnDer) {

  btnDer.addEventListener("click", () => {
    contenedor.scrollLeft += 320;
  });

  btnIzq.addEventListener("click", () => {
    contenedor.scrollLeft -= 320;
  });

}


// ============================
// VISOR DE IMÁGENES
// ============================

const imagenesGaleria = document.querySelectorAll(".contenedor-imagenes img");
const visor = document.getElementById("visorImagen");
const imagenAmpliada = document.getElementById("imagenAmpliada");
const cerrarVisor = document.querySelector(".cerrar-visor");

if (imagenesGaleria.length > 0 && visor && imagenAmpliada && cerrarVisor) {

  imagenesGaleria.forEach(img => {
    img.addEventListener("click", () => {
      visor.style.display = "flex";
      imagenAmpliada.src = img.src;
    });
  });

  cerrarVisor.addEventListener("click", () => {
    visor.style.display = "none";
  });

}