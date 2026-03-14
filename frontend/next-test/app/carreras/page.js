export default function AboutPage() {
  return (
    <>
      <section className="about-hero" style={{ background: "var(--verde-upm)" }}>
        <h1>Oferta Educativa</h1>
        <p>La Universidad Politécnica Mesoamericana ofrece diversas Ingenierias y Licenciaturas,
           asi como titulos en Tecnico Superior Universitario .</p>
      </section>

 <section>
  <h2>Oferta Educativa</h2>

  <ul className="lista-carreras">
    <li>LICENCIATURA EN IGENIERÍA EN TECNOLOGÍAS DE LA INFORMACIÓN E INNOVACIÓN DIGITAL</li>
    <li>LICENCIATURA EN IGENIERÍA EN MANEJO DE RECURSOS NATURALES</li>
    <li>LICENCIATURA EN IGENIERÍA PETROLERA</li>
    <li>LICENCIATURA EN GESTIÓN Y DESARROLLO TURISTICO </li>
    <li>LICENCIATURA EN COMERCIO INTERNACIONAL Y ADUANAS</li>
  </ul>
</section>

      <footer>
        <p>© 2025 Universidad Politécnica Mesoamericana</p>
      </footer>
    </>
  );
}