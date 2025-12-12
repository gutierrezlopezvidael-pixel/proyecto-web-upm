import "./globals.css";
import Header from "../components/Header";

export const metadata = {
  title: "Proyecto UPM 2.0",
  description: "Arquitectura Headless Híbrida",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}

