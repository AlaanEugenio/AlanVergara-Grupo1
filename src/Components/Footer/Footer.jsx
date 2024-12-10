import React from "react";

const Logo = "/logo.png";

const Footer = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow"></main>

      <footer className="bg-blue-950 text-white py-4">
        <div className="container mx-auto flex items-center justify-between px-4">
          <div className="flex items-center">
            <img src={Logo} alt="Logo Principal" className="w-20 h-20" />
          </div>

          <p className="text-lg font-semibold uppercase">
            © 2024 Cubos Manía. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
