import React from "react";

const Logo = "/logo.png";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-blue-950 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="mb-2">
          © 2024 Cubos Manía. Todos los derechos reservados.
        </p>
        <div className="container mx-auto max-w-[100px]">
          <img src={Logo} alt="Logo Principal" />
        </div>
        <div className="flex justify-center space-x-4"></div>
      </div>
    </footer>
  );
};

export default Footer;
