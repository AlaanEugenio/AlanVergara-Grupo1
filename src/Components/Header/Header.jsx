import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: "Inicio", path: "/" },
    { id: 2, text: "Productos", path: "/productos" },
    { id: 3, text: "Contacto", path: "/contacto" },
  ];

  return (
    <div className="bg-blue-950 w-full flex justify-between items-center h-24 mx-auto px-4 text-white">
      <Link to="/">
        <button className="text-3xl font-bold text-[#528350]">
          Cubos Manía
        </button>
      </Link>
      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <li
            key={item.id}
            onClick={() => navigate(item.path)}
            className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
          >
            {item.text}
          </li>
        ))}
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-full h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
          Cubos Manía
        </h1>

        {navItems.map((item) => (
          <li
            key={item.id}
            onClick={() => {
              navigate(item.path);
              handleNav();
            }}
            className="p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600"
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
