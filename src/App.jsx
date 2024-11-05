import React from "react";
import Inicio from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Productspage from "./Components/Productos/Productos";
import Contacto from "./Components/Contacto/Contacto";
import ItemDetail from "./Components/ItemDetail/ItemDetail";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
function App() {
  return (
    <div className="bg-[url('/public/Background.jpg')] bg-cover bg-center bg-fixed min-h-screen">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Productos" element={<Productspage />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/productos/:productId" element={<ItemDetail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
