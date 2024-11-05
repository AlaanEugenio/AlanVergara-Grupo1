import Item from "../Item/Item";
import { getProducts } from "../../data/asyncMock";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";

export default function ItemList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {loading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {products.map((prod) => (
            <Item {...prod} key={prod.id} />
          ))}
        </div>
      )}
    </>
  );
}
