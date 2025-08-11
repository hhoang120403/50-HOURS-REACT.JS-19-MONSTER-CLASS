import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

// When working with async actions we need it
export type AppDispatch = typeof store.dispatch;
