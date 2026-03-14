const preguntas = document.querySelectorAll(".faq-pregunta");

preguntas.forEach(pregunta => {
  pregunta.addEventListener("click", () => {
    const item = pregunta.parentElement;
    item.classList.toggle("activo");
  });
});


/* =================================
   SUMNENU EN CELULAR 
================================= */

document.querySelectorAll(".submenu > a").forEach(menu => {

menu.addEventListener("click", function(e){

if(window.innerWidth <= 768){

e.preventDefault();

this.parentElement.classList.toggle("active");

}

});

});


/* =================================
   SLIDER AUTOMÁTICO DEL BANNER
================================= */

const slides = document.querySelectorAll(".slide");
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

// ============================
// CARRUSEL GALERIA CARRERAS
// ============================

const contenedor = document.querySelector(".contenedor-imagenes");
const btnIzq = document.querySelector(".flecha.izquierda");
const btnDer = document.querySelector(".flecha.derecha");

if(contenedor){

btnDer.addEventListener("click", () => {
contenedor.scrollLeft += 320;
});

btnIzq.addEventListener("click", () => {
contenedor.scrollLeft -= 320;
});

}


// ============================
// VISOR DE IMÁGENES GALERÍA
// ============================

const imagenesGaleria = document.querySelectorAll(".contenedor-imagenes img");
const visor = document.getElementById("visorImagen");
const imagenAmpliada = document.getElementById("imagenAmpliada");
const cerrarVisor = document.querySelector(".cerrar-visor");

imagenesGaleria.forEach(img => {
img.addEventListener("click", () => {

visor.style.display = "flex";
imagenAmpliada.src = img.src;

});
});

cerrarVisor.addEventListener("click", () => {
visor.style.display = "none";
});