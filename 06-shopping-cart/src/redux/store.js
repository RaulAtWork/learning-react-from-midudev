import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "./productsSlice";

const rootReducer = combineReducers({
  products: productReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

// Selectors
export {
  selectAll as select_products_all,
  selectByFilters as select_products_filtered,
  updateFilters as action_products_updateFilters,
  selectFilters as select_products_filters,
} from "./productsSlice";
