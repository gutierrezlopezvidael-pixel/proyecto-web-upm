import Link from "next/link";

export default function Header() {
  return (
    <header style={{
      backgroundColor: "#111",
      padding: "15px",
      color: "white"
    }}>
      <nav style={{
        display: "flex",
        gap: "20px",
        justifyContent: "center"
      }}>
        <Link href="/" style={{ color: "white", textDecoration: "none" }}>
          Inicio
        </Link>
        <Link href="/about" style={{ color: "white", textDecoration: "none" }}>
          Acerca de
        </Link>
        <Link href="/services" style={{ color: "white", textDecoration: "none" }}>
          Servicios
        </Link>
        <Link href="/contacto" style={{ color: "white", textDecoration: "none" }}>
          Contacto
        </Link>
      </nav>
    </header>
  );
}

