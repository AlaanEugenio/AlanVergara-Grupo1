import React, { useState, useEffect } from "react";
import Loading from "../Loading/Loading";
import Logo from "/logo.png";

const About = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      {loading ? (
        <Loading message="Cargando información sobre Cubos Manía..." />
      ) : (
        <div className="max-w-4xl mx-auto bg-blue-950 shadow-lg rounded-lg p-6 space-y-6">
          <div className="flex justify-center">
            <img
              src={Logo}
              alt="Logo de Cubos Manía"
              className="w-40 h-auto object-contain"
            />
          </div>
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white underline">
              Sobre Nosotros
            </h1>
            <p className="mt-4 text-2xl text-justify text-white">
              Bienvenido a Cubos Manía. Somos una tienda dedicada a los amantes
              de los cubos Rubik y puzzles. Nuestra misión es brindar productos
              de alta calidad que desafíen tu mente y te inspiren a resolver
              nuevos retos. Estamos ubicados en Dalcahue, Chiloé y realizamos
              envíos a nivel nacional. ¡Explora nuestra colección y encuentra el
              cubo perfecto para ti!
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <img
              src="/cubo-mirror.png"
              alt="Cubo Mirror"
              className="h-300 object-cover rounded-lg"
            />
            <img
              src="/3x3gan.png"
              alt="Cubo 3x3 GAN"
              className="w-full object-cover rounded-lg"
            />
            <img
              src="/timemachine.png"
              alt="Cubo Time Machine"
              className="w-full object-cover rounded-lg"
            />
            <img
              src="/2x2x2qidi.png"
              alt="Cubo 2x2 QiDi"
              className="h-240 object-cover rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
