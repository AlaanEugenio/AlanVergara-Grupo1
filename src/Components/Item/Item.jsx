import { Link } from "react-router-dom";

export default function Item({ id, name, price, img, stock}) {
  const formattedPrice = price.toLocaleString("es-CL");

  return (
    <div className="bg-gray-600 shadow-lg rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-xl flex flex-col items-stretch">
      <Link to={`/productos/${id}`}>
        <img
          className="bg-blue-800 w-full h-auto object-cover"
          src={img}
          alt={`Imagen de ${name}`}
        />
      </Link>
      <div className="p-1">
        <Link
          to={`/productos/${id}`}
          className="text-lg font-semibold tracking-wide uppercase text-white hover:text-white"
        >
          {name}
        </Link>
        <h4 className="text-white text-md mt-1">$ {formattedPrice}</h4>
      </div>
    </div>
  );
}
