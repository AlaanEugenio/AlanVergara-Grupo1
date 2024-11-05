import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Formulario enviado");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[70%] mx-auto p-6 bg-blue-950 shadow-md rounded-md"
    >
      <h2 className="text-2xl font-bold mb-4 text-white">Contacto</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block text-white">
          Nombre
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Tu nombre"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-white">
          Correo electrónico
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Tu correo electrónico"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-white">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Tu mensaje"
          rows="8"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Enviar
      </button>
    </form>
  );
};

export default ContactForm;
