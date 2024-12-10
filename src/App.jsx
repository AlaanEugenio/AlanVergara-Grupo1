import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Productspage from "./Components/Productos/Productos";
import Contacto from "./Components/Contacto/Contacto";
import ItemDetail from "./Components/ItemDetail/ItemDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Cart from "./Components/Cart/Cart";
import About from "./Components/About/About";
import Busqueda from "./Components/Busqueda/Busqueda";

function App() {
  return (
    <div className="bg-[url('/Background.jpg')] bg-cover bg-center bg-fixed min-h-screen">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/Productos" element={<Productspage />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/productos/:productId" element={<ItemDetail />} />
          <Route path="/About" element={<About />} />
          <Route path="/buscar" element={<Busqueda />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
