import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  id: string;
  brand: string;
  description: string;
  image: string;
  model: string;
  name: string;
  price: string;
  quantity?: number;
  totalPrice?: number;
}

interface BasketState {
  basket: Product[];
  totalPrice: number;
}

interface AddToBasketPayload {
  product: Product;
  id: string;
}

interface incrementOrDecrementToBasketItemPayload {
  id: string;
}

const initialState: BasketState = {
  basket: [],
  totalPrice: 0,
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    setBasketAndTotalPrice: (state) => {
      state.basket = [];
      const storedBasket = localStorage.getItem("products");
      const storedTotalPrice = localStorage.getItem("totalPrice");
      if (storedBasket && storedTotalPrice) {
        state.basket = JSON.parse(storedBasket);
        state.totalPrice = JSON.parse(storedTotalPrice);
      }
    },

    addToBasket: (state, action: PayloadAction<AddToBasketPayload>) => {
      const { product, id } = action.payload;
      const resultObject = state.basket.find((item) => item.id === id);
      if (resultObject) {
        resultObject.quantity = (resultObject.quantity || 0) + 1;
        resultObject.totalPrice =
          resultObject.quantity * parseInt(resultObject.price, 10);
        state.totalPrice += parseInt(resultObject.price, 10);
        localStorage.setItem("products", JSON.stringify(state.basket));
        localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
      } else {
        // Set quantity to 1 for the new product
        const productToAdd = {
          ...product,
          quantity: 1,
          totalPrice: parseInt(product.price, 10),
        };

        state.basket.push(productToAdd);
        state.totalPrice += parseInt(product.price, 10);
        localStorage.setItem("products", JSON.stringify(state.basket));
        localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
      }
    },
    removeToBasket: (state) => {
      state.basket = [];
      state.totalPrice = 0;
      localStorage.setItem("products", JSON.stringify(state.basket));
      localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
    },
    incrementToBasketItem: (
      state,
      action: PayloadAction<incrementOrDecrementToBasketItemPayload>
    ) => {
      const { id } = action.payload;
      const resultObject = state.basket.find((item) => item.id === id);
      if (resultObject) {
        resultObject.quantity = (resultObject.quantity || 0) + 1;
        resultObject.totalPrice =
          resultObject.quantity * parseInt(resultObject.price, 10);
        state.totalPrice += parseInt(resultObject.price, 10);
        localStorage.setItem("products", JSON.stringify(state.basket));
        localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
      }
    },
    decrementToBasketItem: (
      state,
      action: PayloadAction<incrementOrDecrementToBasketItemPayload>
    ) => {
      const { id } = action.payload;
      const resultObject = state.basket.find((item) => item.id === id);

      // Remove the item from the basket if quantity becomes 0
      if (resultObject?.quantity === 1) {
        const resultObjectIndex = state.basket.findIndex(
          (item) => item.id === id
        );
        state.basket.splice(resultObjectIndex, 1);
        localStorage.setItem("products", JSON.stringify(state.basket));
        localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
      }

      if (
        resultObject &&
        resultObject.quantity !== undefined &&
        resultObject.quantity > 0
      ) {
        resultObject.quantity -= 1;
        resultObject.totalPrice =
          resultObject.quantity * parseFloat(resultObject.price);
        state.totalPrice -= parseFloat(resultObject.price);
        localStorage.setItem("products", JSON.stringify(state.basket));
        localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
      }
    },
  },
});

export const {
  setBasketAndTotalPrice,
  addToBasket,
  removeToBasket,
  incrementToBasketItem,
  decrementToBasketItem,
} = basketSlice.actions;
export default basketSlice.reducer;
