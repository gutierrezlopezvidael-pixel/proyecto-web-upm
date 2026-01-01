const preguntas = document.querySelectorAll(".faq-pregunta");

preguntas.forEach(pregunta => {
  pregunta.addEventListener("click", () => {
    const item = pregunta.parentElement;
    item.classList.toggle("activo");
  });
});
