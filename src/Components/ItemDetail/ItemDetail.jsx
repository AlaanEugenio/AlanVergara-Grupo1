import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../data/asyncMock";
import Loading from "../Loading/Loading";

export default function ItemDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

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

  return (
    <div className="container mx-auto max-w-[1170px]">
      <div className="grid grid-cols-2 pt-[50px] pb-[100px]">
        <div className="span-col-1 pr-[30px]">
          <img
            src={product.img}
            alt={product.name}
            className="w-full rounded-[20px]"
          />
        </div>
        <div>
          <h1 className="text-[45px] text-black uppercase">{product.name}</h1>
          <p className="text-[20px] text-black my-[20px]">
            {product.description}
          </p>

          <p className="text-[24px] font-bold text-black underline">
            Precio: ${product.price}
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
        </div>
      </div>
    </div>
  );
}
