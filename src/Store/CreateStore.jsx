import { create } from "zustand";

const useStore = create((set) => ({
  cart: [],

  // esto es Agregar producto al carrito
  addToCart: (product) =>
    set((state) => {
      const existingProduct = state.cart.find((item) => item.id === product.id);
      if (existingProduct) {
        // Verificar si el stock permite agregar más
        if (existingProduct.quantity < product.stock) {
          return {
            cart: state.cart.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + (product.quantity || 1) }
                : item
            ),
          };
        } else {
          alert("Sin stock disponible.");
          return state; // Sin cambios
        }
      } else {
        // Si no existe, agregar con cantidad predeterminada de 1
        return {
          cart: [
            ...state.cart,
            {
              ...product,
              quantity: Math.min(product.quantity || 1, product.stock),
            },
          ],
        };
      }
    }),

  // Eliminar producto del carrito
  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== productId),
    })),

  // Vaciar carrito
  clearCart: () =>
    set(() => ({
      cart: [],
    })),

  // Incrementar cantidad de un producto
  increment: (productId) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === productId && item.quantity < item.stock
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ),
    })),

  // Decrementar cantidad de un producto (mínimo 1)
  decrement: (productId) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ),
    })),
}));

export default useStore;
