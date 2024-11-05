import { Link } from "react-router-dom";

export default function Item({ id, name, price, img }) {
  return (
    <div className="bg-blue-950 shadow-lg rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-xl flex flex-col items-stretch">
      <Link to={`/products/${id}`}>
        <img
          className="w-full h-auto object-cover"
          src={img}
          alt={`Imagen de ${name}`}
        />
      </Link>
      <div className="p-1">
        {" "}
        <Link
          to={`/products/${id}`}
          className="text-lg font-semibold tracking-wide uppercase text-white hover:text-blue-300"
        >
          {name}
        </Link>
        <h4 className="text-white text-md mt-1">$ {price}</h4>
      </div>
    </div>
  );
}
