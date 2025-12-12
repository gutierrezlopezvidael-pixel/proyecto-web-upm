export default function ContactPage() {
  return (
    <>
      <section className="about-hero" style={{ background: "var(--naranja-upm)" }}>
        <h1>Contacto</h1>
        <p>Ponte en contacto con la Universidad Politécnica Mesoamericana.</p>
      </section>

      <section>
        <h2>Información de Contacto</h2>
        <p><strong>Dirección:</strong> Carretera Villahermosa - Frontera km 3.5, Tenosique, Tabasco</p>
        <p><strong>Teléfono:</strong> (934) 342 0213</p>
        <p><strong>Correo institucional:</strong> contacto@upm.edu.mx</p>
      </section>

      <section>
        <h2>Formulario de Mensaje</h2>

        <form className="formulario-contacto">
          <input type="text" placeholder="Nombre completo" />
          <input type="email" placeholder="Correo electrónico" />
          <textarea placeholder="Escribe tu mensaje aquí"></textarea>
          <button type="submit">Enviar Mensaje</button>
        </form>
      </section>

      <footer>
        <p>© 2025 Universidad Politécnica Mesoamericana</p>
      </footer>
    </>
  );
}
