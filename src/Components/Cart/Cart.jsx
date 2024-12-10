import React, { useState, useEffect } from "react";
import useStore from "../../Store/CreateStore";
import Loading from "../Loading/Loading";

export default function Cart() {
  const { cart, increment, decrement, removeFromCart, clearCart } = useStore();
  const [loading, setLoading] = useState(true);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <div className="container bg-blue-950 w-[65%] h-3/4 my-3 rounded-2xl mx-auto px-7 py-7">
      <h2 className="text-white text-2xl font-bold mb-4">Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p className="text-white">Tu carrito está vacío.</p>
      ) : (
        <div>
          <ul className="divide-y text-white divide-gray-300">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center py-4"
              >
                <div className="w-20 h-20 flex-shrink-0 mr-4">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-sm text-white">
                    ${item.price.toLocaleString("es-CL")} x {item.quantity}{" "}
                    unidades
                  </p>
                  <p className="text-sm text-white">
                    Subtotal: $
                    {(item.price * item.quantity).toLocaleString("es-CL")}
                  </p>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => decrement(item.id)}
                    className="px-2 py-1 bg-gray-600 text-white rounded-l"
                  >
                    -
                  </button>
                  <span className="px-4">{item.quantity}</span>
                  <button
                    onClick={() => increment(item.id)}
                    className="px-2 py-1 bg-gray-600 text-white rounded-r"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-4 px-2 py-1 bg-red-500 text-white rounded"
                  >
                    Eliminar
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <p className="text-lg text-white font-bold">
              Total: ${total.toLocaleString("es-CL")}
            </p>
            <button
              onClick={clearCart}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded"
            >
              Vaciar Carrito
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
