// asyncMock.js

export const products = [
  {
    id: 1,
    name: "cubo mirrorles z-cube",
    price: "8.990",
    description:
      "Un mirror con un diseño espectacular esta vez con un fondo rosado especial para coleccionistas, con stickers de fibra de carbono, de la reconocida marca Z-cube, no puede faltar en tu colección.",
    img: "/cubo-mirror.jpg",
    stock: 5,
    category: "Mirrorles",
  },
  {
    id: 2,
    name: "cubo 3x3 gan 11m",
    price: "24.990",
    description:
      "El GAN 11 M es la nueva (agosto 2021) versión magnética de la famosa y reconocida marca GAN. Esta versión del Gan 11 viene con los imanes tradicionales en arista vértice. Las tensiones y elasticidad de este cubo se ajustan mediante el sistema GES Pro.",
    img: "/3x3gan.jpg",
    stock: 20,
    category: "3x3",
  },
  {
    id: 3,
    name: "cubo Time Machine",
    price: "11.990",
    description:
      "Para quienes aman los desafíos y no pueden asumir un costo tan alto, llegó este Time Machine Alternativo en Stickerless.",
    img: "/timemachine.jpg",
    stock: 10,
    category: "Especiales",
  },
  {
    id: 4,
    name: "cubo 2x2 QiDi",
    price: "3.990",
    description:
      "2x2x2 económico de QiDi, de gran desempeño, excelente para principiantes. ",
    img: "/2x2x2qidi.jpg",
    stock: 9,
    category: "2x2",
  },
  {
    id: 5,
    name: "Set 5 Cubos Fibra Carbono",
    price: "30.990",
    description:
      "Pack de 5 cubos Z-Cube con stickers de fibra de carbono, de giro suave y rápido, perfectos para velocidad y con un diseño muy llamativo.",
    img: "/set5cubos.jpg",
    stock: 9,
    category: "Packs de cubos",
  },
];

export const getProducts = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res(products);
    }, 2500);
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

export const getProductByName = (name) => {
  return new Promise((res) => {
    const productosFiltrados = products.filter(
      (product) => product.name.toLowerCase() === name.toLowerCase()
    );
    setTimeout(() => {
      res(productosFiltrados);
    }, 2000);
  });
};

export const getProductByCategory = (category) => {
  return new Promise((res) => {
    const productosFiltrados = products.filter(
      (product) => product.category === category
    );
    setTimeout(() => {
      res(productosFiltrados);
    }, 2000);
  });
};
