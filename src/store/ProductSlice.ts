import { createSlice } from "@reduxjs/toolkit";
import { isProduct, Products } from "../mock/Products";

// Data giả lập
const initialMockData = {
  Products,
  selecItem: {},
};

// Tạo slice cho dữ liệu mock
const ProductSlice = createSlice({
  name: "mockData",
  initialState: initialMockData,
  reducers: {
    itemPro: (state, action) => {
      state.Products.find((item: isProduct) => {
        if (item.id === action.payload) {
          return (state.selecItem = item);
        }
      });
    },
  },
});

export const { itemPro } = ProductSlice.actions;

export default ProductSlice.reducer;
