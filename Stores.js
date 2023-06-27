import { configureStore } from '@reduxjs/toolkit';
import basketSlice from './Slices/Cartslices';
import restaurantSlice from './Slices/restaurant';

export const store = configureStore({
  reducer: {
    basket: basketSlice,
    restaurant: restaurantSlice
  }
});
