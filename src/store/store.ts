import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./ProductSlice";

const store = configureStore({
  reducer: {
    mockData: ProductSlice,
  },
});

export default store;
