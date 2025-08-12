import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from './product/productSlice';

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(productsApi.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;

export const AppDispatch = typeof store.dispatch;
