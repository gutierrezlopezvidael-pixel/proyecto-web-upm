import "./globals.css";

export const metadata = {
  title: "Proyecto UPM 2.0",
  description: "Arquitectura Headless Híbrida",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>

        {/* MENÚ INSTITUCIONAL UPM */}
        <header className="menu">
          <div className="logo-container">
            <img src="/logo-upm.png" alt="Logo UPM" className="logo-upm" />
            <span className="titulo-upm">Universidad Politécnica Mesoamericana</span>
          </div>

          <nav>
            <a href="/">Inicio</a>
            <a href="/about">Conócenos</a>
            <a href="/services">Servicios</a>
            <a href="/carreras">Carreras</a>
            <a href="/contact">Contacto</a>
          </nav>
        </header>

        {children}

      </body>
    </html>
  );
}