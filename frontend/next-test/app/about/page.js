export default function AboutPage() {
  return (
    <>
      <section className="about-hero" style={{ background: "var(--verde-upm)" }}>
        <h1>Acerca de la UPM</h1>
        <p>Formando profesionistas que transforman su región y su entorno.</p>
      </section>

      <section>
        <h2>¿Quiénes Somos?</h2>
        <p>
          La Universidad Politécnica Mesoamericana es una institución dedicada a la formación integral
          de estudiantes mediante programas educativos de calidad, investigación aplicada y compromiso social.
        </p>
      </section>

      <section className="about-block">
        <h2>Misión</h2>
        <p>
          Ofrecer servicios educativos de nivel superior con un enfoque tecnológico, científico y humanista,
          contribuyendo al desarrollo regional mediante profesionistas competentes e innovadores.
        </p>
      </section>

      <section className="about-block">
        <h2>Visión</h2>
        <p>
          Ser una institución reconocida por su calidad académica, vinculación e impacto en la comunidad,
          liderando la formación profesional en la región mesoamericana.
        </p>
      </section>

      <section>
  <h2>Valores Institucionales</h2>

  <ul className="lista-valores">
    <li>✔ Responsabilidad</li>
    <li>✔ Honestidad</li>
    <li>✔ Respeto</li>
    <li>✔ Solidaridad</li>
    <li>✔ Compromiso</li>
    <li>✔ Ética</li>
  </ul>
</section>


      <footer>
        <p>© 2025 Universidad Politécnica Mesoamericana</p>
      </footer>
    </>
  );
}
