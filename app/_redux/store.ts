import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../_redux/features/product-slice'
import basketSlice from './features/basket-slice';
export const store = configureStore({
  reducer: {
    productReducer,
    basketSlice
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
