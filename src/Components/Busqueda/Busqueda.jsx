import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { getProducts } from "../../data/asyncMock";
import Loading from "../Loading/Loading";

const Busqueda = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const searchProducts = async () => {
      try {
        const products = await getProducts();
        const results = products.filter((product) =>
          product.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredProducts(results);
      } catch (error) {
        console.error("Error al cargar los productos:", error);
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      searchProducts();
    }
  }, [query]);

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold text-center mb-6">
        Resultados de búsqueda para: "{query}"
      </h2>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              to={`/productos/${product.id}`}
              className="bg-blue-950 p-4 rounded-lg"
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-[180px] object-contain mb-4"
              />
              <h3 className="text-lg font-semibold text-white">
                {product.name}
              </h3>
              <p className="text-xl font-bold text-white">
                {`$${product.price.toLocaleString("es-CL")}`}
              </p>
              <p className="text-sm text-gray-300">{product.description}</p>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center text-xl text-white">
          No se encontraron productos para "{query}"
        </div>
      )}
    </div>
  );
};

export default Busqueda;
