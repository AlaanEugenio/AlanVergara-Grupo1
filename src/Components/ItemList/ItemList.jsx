import Item from "../Item/Item";
import { getProducts } from "../../data/asyncMock";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import CategoryFilter from "../CategoryFilter/CategoryFilter";

export default function ItemList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) =>
          product.category.some((category) => category === selectedCategory)
        );

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 p-4">
            {filteredProducts.map((prod) => (
              <Item {...prod} key={prod.id} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
