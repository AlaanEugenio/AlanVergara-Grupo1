import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../data/asyncMock";
import Loading from "../Loading/Loading";
import useStore from "../../Store/CreateStore";

export default function ItemDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useStore();

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const incrementQuantity = () => {
    if (product && quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      stock: product.stock,
      quantity,
      img: product.img,
    });
    alert(`${product.name} ha sido agregado al carrito.`);
  };

  useEffect(() => {
    getProductById(productId).then((data) => {
      setProduct(data);
      setLoading(false);
    });
  }, [productId]);

  if (loading) {
    return (
      <div className="container mx-auto max-w-[1170px]">
        <Loading />
      </div>
    );
  }

  if (!product) {
    return <div>Producto sin stock</div>;
  }

  const formattedPrice = product.price.toLocaleString("es-CL");
  const formattedTotalPrice = (product.price * quantity).toLocaleString(
    "es-CL"
  );

  return (
    <div className="container mx-auto px-2 max-w-[1170px]">
      <div className="grid grid-cols-2 pt-[50px] pb-[100px]">
        <div className="span-col-1 pr-[30px]">
          <img
            src={product.img}
            alt={product.name}
            className="transition-transform duration-900 ease-in-out hover:scale-110 w-full rounded-[50px]"
          />
        </div>
        <div>
          <h1 className="text-[50px] bg-blue-950 p-2 rounded-lg shadow-lg text-white text-center mb-6 uppercase inline-block">
            {product.name}
          </h1>

          <p className="text-[20px] text-justify text-gray-850 my-[20px]">
            {product.description}
          </p>

          <p className="text-[20px] bg-blue-950 p-2 rounded-lg shadow-lg text-white text-center mb-6 inline-block uppercase">
            Precio: ${formattedPrice}
          </p>

          <div className="flex items-center my-4">
            <button
              onClick={decrementQuantity}
              className="px-4 py-2 bg-blue-950 text-white rounded-l"
            >
              -
            </button>
            <span className="px-4 text-lg">{quantity}</span>
            <button
              onClick={incrementQuantity}
              className="px-4 py-2 bg-blue-950 text-white rounded-r"
            >
              +
            </button>
          </div>

          <p className="text-l text-black">Stock disponible: {product.stock}</p>

          <p className="text-[20px] text-black font-bold mt-4">
            Precio Total: ${formattedTotalPrice}
          </p>

          <button
            onClick={handleAddToCart}
            className="mt-4 px-6 py-2 bg-blue-800 text-white rounded shadow-lg hover:bg-blue-950"
          >
            Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
  );
}
