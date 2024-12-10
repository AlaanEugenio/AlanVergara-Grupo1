import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  const [nav, setNav] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const handleNav = () => {
    setNav(!nav);
  };

  const handleSearch = () => {
    if (searchInput.trim()) {
      navigate(`/buscar?query=${searchInput}`);
      setSearchInput("");
    }
  };

  const navItems = [
    { id: 1, text: "Inicio", path: "/" },
    { id: 2, text: "Productos", path: "/productos" },
    { id: 3, text: "Contacto", path: "/contacto" },
    { id: 4, text: "About", path: "/about" },
    { id: 5, text: "Carrito", path: "/cart" },
  ];

  return (
    <div className="bg-blue-950 w-full flex justify-between items-center h-24 px-4 text-white">
      <Link to="/">
        <button className="text-3xl rounded-xl font-bold text-white">
          Cubos Manía
        </button>
      </Link>

      <div className="hidden md:flex items-center space-x-4">
        <ul className="flex space-x-4">
          {navItems.map((item) => (
            <li
              key={item.id}
              onClick={() => navigate(item.path)}
              className="p-4 hover:bg-blue-800 rounded-xl cursor-pointer duration-300 hover:text-white"
            >
              {item.text}
            </li>
          ))}
        </ul>

        <div className="flex items-center">
          <input
            type="text"
            placeholder="Buscar..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="p-2 rounded-lg text-black outline-none"
          />
          <button
            onClick={handleSearch}
            className="ml-2 p-2 bg-blue-950 rounded-lg text-white"
          >
            <AiOutlineSearch size={20} />
          </button>
        </div>
      </div>

      <div onClick={handleNav} className="block md:hidden cursor-pointer">
        <AiOutlineMenu size={24} />
      </div>

      {nav && (
        <div className="fixed inset-0 bg-blue-950 z-50 flex flex-col items-start p-6">
          <div className="w-full flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-white">Cubos Manía</h1>
            <button onClick={handleNav} className="text-white">
              <AiOutlineClose size={30} />
            </button>
          </div>

          <ul className="w-full">
            {navItems.map((item) => (
              <li
                key={item.id}
                onClick={() => {
                  navigate(item.path);
                  handleNav();
                }}
                className="w-full p-4 border-b border-gray-600 hover:bg-blue-800 rounded-xl cursor-pointer duration-300"
              >
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
