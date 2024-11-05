import React from "react";
import ContactForm from "../ContactForm/ContactForm";
function Contacto() {
  return (
    <div className="flex flex-col items-center my-8">
      <h1 className="text-3xl font-bold text-white bg-blue-950 p-6 rounded-lg shadow-lg text-center mb-6">
        Contacta con nosotros
      </h1>
      <h2 className="text-xl font-bold text-white bg-blue-950 p-6 rounded-lg shadow-lg text-center mb-6">
        Si quieres consultar por algún cubo específico y que no esté listado, no
        dudes en escribirnos!
      </h2>
      <ContactForm />
    </div>
  );
}

export default Contacto;
