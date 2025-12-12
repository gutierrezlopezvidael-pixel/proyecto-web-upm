export default function ServicesPage() {
  return (
    <>
      <section className="about-hero" style={{ background: "#ff8c00" }}>
        <h1>Servicios Institucionales</h1>
        <p>Conoce los servicios que la UPM ofrece a su comunidad.</p>
      </section>

      <section>
        <h2>Servicios Académicos</h2>
        <ul className="lista-servicios">
          <li>Asesorías académicas personalizadas</li>
          <li>Biblioteca y recursos digitales</li>
          <li>Acceso a laboratorios especializados</li>
          <li>Tutorías institucionales</li>
        </ul>
      </section>

      <section>
        <h2>Servicios Administrativos</h2>
        <ul className="lista-servicios">
          <li>Control escolar</li>
          <li>Gestión de constancias y documentos</li>
          <li>Inscripciones y reinscripciones</li>
        </ul>
      </section>

      <section>
        <h2>Servicios Estudiantiles</h2>
        <ul className="lista-servicios">
          <li>Actividades deportivas</li>
          <li>Actividades culturales</li>
          <li>Bienestar estudiantil</li>
        </ul>
      </section>

      <footer>
        <p>© 2025 Universidad Politécnica Mesoamericana</p>
      </footer>
    </>
  );
}