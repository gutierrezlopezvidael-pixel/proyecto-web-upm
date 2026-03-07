const preguntas = document.querySelectorAll(".faq-pregunta");

preguntas.forEach(pregunta => {
  pregunta.addEventListener("click", () => {
    const item = pregunta.parentElement;
    item.classList.toggle("activo");
  });
});

// ===== SLIDER DE BANNERS =====

const slides = document.querySelectorAll(".slide");

let index = 0;

function cambiarSlide(){

  slides[index].classList.remove("active");

  index++;

  if(index >= slides.length){
    index = 0;
  }

  slides[index].classList.add("active");
}

setInterval(cambiarSlide, 4000);

document.querySelectorAll(".submenu > a").forEach(menu => {
menu.addEventListener("click", function(e){

if(window.innerWidth <= 768){

e.preventDefault()

this.parentElement.classList.toggle("active")

}

})
})