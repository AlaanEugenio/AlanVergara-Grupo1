export const products = [
  {
    id: 1,
    name: "cubo mirrorles",
    price: 3990,
    description: "Cubo mirrorles color rosa",
    img: "/cubo-mirror.jpg",
    stock: 5,
  },
  {
    id: 2,
    name: "cubo 3x3 gan",
    price: 3990,
    description: "Cubo 3x3 marca Gan",
    img: "/3x3gan.jpg",
    stock: 6,
  },
  {
    id: 3,
    name: "cubo Time Machine",
    price: 5990,
    description: "Nueva versión del famoso cubo Time Machine",
    img: "/timemachinepirata.jpg",
    stock: 10,
  },
  {
    id: 4,
    name: "cubo 2x2 QiDi",
    price: 3990,
    description:
      "Cubo 2x2 compacto, de la marca QiDi, para empezar a resolver cubos",
    img: "/2x2x2qidi.jpg",
    stock: 9,
  },
];

export const getProducts = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res(products);
    }, 2000);
  });
};
export const getProductById = (id) => {
  return new Promise((res) => {
    const productoFiltrado = products.find(
      (product) => product.id === parseInt(id)
    );
    setTimeout(() => {
      res(productoFiltrado);
    }, 2000);
  });
};

export const getProductByDescription = (description) => {
  return new Promise((res) => {
    const productosFiltrados = products.filter(
      (product) => product.description === description
    );
    setTimeout(() => {
      res(productosFiltrados);
    }, 2000);
  });
};
