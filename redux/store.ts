import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { useDispatch } from 'react-redux';

import cartReducer from '@/features/products/redux/cartSlice';
import settingReducer from '@/redux/settingSlice';

const store = configureStore({
  reducer: {
    settings: settingReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Initialize network listener
setupListeners(store.dispatch);
export default store;
