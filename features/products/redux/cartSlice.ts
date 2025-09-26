import { CART_KEY } from '@/helper/config';
import { saveCart } from '@/utils/storage';
import { CartItem, CartState } from '@/utils/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const calculateTotal = (cartList: CartItem[]) =>
  cartList.reduce((sum, item) => sum + (item.price || 0) * (item.qty || 1), 0);

const initialState: CartState = {
  cartList: [],
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartList: (state, action: PayloadAction<CartItem[]>) => {
      state.cartList = action.payload;
      state.cartTotalAmount = calculateTotal(state.cartList);
      saveCart(CART_KEY, state); // persist
    },

    addToCart: (state, action: PayloadAction<CartItem>) => {
      const { id, qty = 1 } = action.payload;
      const existing = state.cartList.find((item) => item.id === id);

      if (existing) {
        existing.qty += qty;
      } else {
        state.cartList.push({ ...action.payload, qty });
      }

      state.cartTotalAmount = calculateTotal(state.cartList);
      saveCart(CART_KEY, state);
    },

    updateCartQty: (state, action: PayloadAction<{ id: number; qty: number }>) => {
      const { id, qty } = action.payload;
      const existing = state.cartList.find((item) => item.id === id);

      if (existing) {
        existing.qty = qty > 0 ? qty : 1;
      }

      state.cartTotalAmount = calculateTotal(state.cartList);
      saveCart(CART_KEY, state);
    },

    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cartList = state.cartList.filter((item) => item.id !== action.payload);
      state.cartTotalAmount = calculateTotal(state.cartList);
      saveCart(CART_KEY, state);
    },

    clearCart: (state) => {
      state.cartList = [];
      state.cartTotalAmount = 0;
      saveCart(CART_KEY, state);
    },
  },
});

export const { setCartList, addToCart, removeFromCart, updateCartQty, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
