import React from "react";
import Inicio from "./Components/Inicio/Inicio";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Productspage from "./Components/Products/Products";
import Contacto from "./Components/Contacto/Contacto";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
function App() {
  return (
    <div className="bg-[url('/public/Background.jpg')] bg-cover bg-center bg-fixed min-h-screen">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Products" element={<Productspage />} />
          <Route path="/Contacto" element={<Contacto />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
