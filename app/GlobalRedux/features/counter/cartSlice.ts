import { createSlice } from "@reduxjs/toolkit";
import { CartDetail } from "@customTypes/cartDetail";

interface CartState {
  data: { [key: string]: CartDetail };
  deliveryCharge: number;
  subtotal: number;
  totalAmount: number;
}

const initialState: CartState = {
  data: {},
  deliveryCharge: 4,
  subtotal: 0,
  totalAmount: 0,
};

const calculalteSubTotal = (products: { [key: string]: CartDetail }) => {
  return Object.keys(products)
    .map((elem) => products[elem])
    .reduce((acc, cur) => {
      return acc + cur.totalPrice;
    }, 0);
};

const calculateTotalPrice = (amount: number) => {
  return amount + initialState.deliveryCharge;
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      const oldState = { ...state.data };
      const product: CartDetail = action.payload;
      const uniqueId =
        product.id + "/" + product.cartSize + "/" + product.cartColor;

      if (oldState) {
        if (oldState[uniqueId]) {
          const totalQuantity =
            oldState[uniqueId].cartQuantity + product.cartQuantity;
          oldState[uniqueId] = {
            ...product,
            cartQuantity: totalQuantity,
            totalPrice: totalQuantity * product.price_amount,
          };
        } else {
          oldState[uniqueId] = action.payload;
        }
      }

      state.data = oldState;
      state.subtotal = calculalteSubTotal(state.data);
      state.totalAmount = calculateTotalPrice(state.subtotal);
    },
    addProductQuantity: (state, action) => {
      const oldState = state.data;
      const product: CartDetail = action.payload;
      const uniqueId =
        product.id + "/" + product.cartSize + "/" + product.cartColor;

      oldState[uniqueId] = {
        ...product,
        totalPrice: product.cartQuantity * product.price_amount,
      };

      state.data = oldState;
      state.subtotal = calculalteSubTotal(state.data);
      state.totalAmount = calculateTotalPrice(state.subtotal);
    },
    deleteProduct: (state, action) => {
      const product: CartDetail = action.payload;
      const uniqueId =
        product.id + "/" + product.cartSize + "/" + product.cartColor;

      delete state.data[uniqueId];
      state.subtotal = calculalteSubTotal(state.data);
      state.totalAmount = calculateTotalPrice(state.subtotal);
    },
    clearCart: (state) => {
      state = initialState;
    },
  },
});

export const {
  addProductToCart,
  deleteProduct,
  addProductQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
