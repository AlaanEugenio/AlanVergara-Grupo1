import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Carrusel from "../Carrusel/Carrusel";
import VideoEmbed from "../Video/Video";
import Loading from "../Loading/Loading";
import { getProducts } from "../../data/asyncMock";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const slides = [
    "/2x2pyraminx.png",
    "/2x2x2qidi.png",
    "/cubo-mirror.png",
    "/square1.png",
    "/tori-cube.png",
    "/mirror-monster.png",
    "/qiyi-m-pro-ball.png",
    "/timemachine.png",
    "/pack5cubosnegros.png",
  ];

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const productsList = await getProducts();
        setProducts(productsList);
      } catch (error) {
        console.error("Error al cargar los productos:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loading />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center my-8">
      <h1 className="text-3xl font-bold text-white bg-blue-950 p-6 rounded-lg shadow-lg text-center mb-6">
        El cubo que buscas lo tenemos
      </h1>

      <div className="w-100 m-auto mb-8">
        <Carrusel slides={slides} />
      </div>

      <div className="flex flex-col md:flex-row items-center w-[65%] px-2 space-y-4 md:space-y-0 md:space-x-4">
        <div className="w-full md:w-1/2 h-full">
          <VideoEmbed />
        </div>
        <div className="w-full md:w-1/2 h-full flex flex-nowrap font-bold uppercase">
          <p className="text-white bg-blue-950 rounded-3xl text-justify p-4">
            Bienvenidos a Cubos Manía, una página hecha por y para cuberos. En
            nuestro catálogo podrás encontrar cubos de todas categorías, tamaños
            y precios, para que empieces o aumentes tu colección. Si eres nuevo
            en el interesante y entretenido mundo de los cubos, a la izquierda
            de este párrafo encontrarás el tutorial del reconocido influencer de
            cubos y puzzles como lo es el español Cuby, con el que podrás
            aprender de manera sencilla y lúdica a armar el cubo 3x3.
          </p>
        </div>
      </div>

      <div className="w-[65%] mt-8">
        <h2 className="flex text-2xl font-bold uppercase text-white bg-blue-950 p-4 text-center rounded-lg mb-6">
          ¡Algunos de nuestros cubos 3x3 para que puedas empezar en este
          maravilloso mundo de los cubos!
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products
            .filter((product) => product.category.includes("3x3"))
            .map((product) => (
              <Link
                key={product.id}
                to={`/productos/${product.id}`}
                className="bg-blue-950 p-4 rounded-lg flex flex-col justify-between h-[350px] overflow-hidden relative transform transition-transform duration-300 hover:scale-105 group"
              >
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-[180px] object-contain mb-4 transition-transform duration-300"
                />
                <h3 className="text-lg font-semibold text-white">
                  {product.name}
                </h3>
                <p className="text-xl font-bold text-white">{`$${product.price}`}</p>

                <p className="text-sm text-gray-300 flex-1 overflow-hidden overflow-ellipsis h-[80px] group-hover:h-auto group-hover:overflow-visible group-hover:line-clamp-none transition-all duration-300 ease-in-out">
                  {product.description}
                </p>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
