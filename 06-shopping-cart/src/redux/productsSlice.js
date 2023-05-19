import { createSlice } from "@reduxjs/toolkit";
import {
  applyfitlersToProductList,
  getCategoryList,
  getMockUpProductList,
} from "../services/Products";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    productList: getMockUpProductList(),
    filters: { priceRange: 1000, category: "" },
    categories: getCategoryList(getMockUpProductList()),
  },
  reducers: {
    updateFilters: (state, action) => {
      console.log("updating filters: ", action.payload);
      state.filters = action.payload;
    },
  },
});

const selectAll = (state) => state.products.productList;
const selectByFilters = (state) =>
  applyfitlersToProductList(state.products.productList, state.products.filters);
const selectFilters = (state) => {
  return state.products.filters;
};

const selectCategories = (state) => state.products.categories;

export { selectAll, selectByFilters, selectFilters, selectCategories };

export const { updateFilters } = productsSlice.actions;

export default productsSlice.reducer;
