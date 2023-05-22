import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "./productsSlice";
import cartReducer from "./cartSlice";

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

// Selectors & actions
export {
  selectAll as select_products_all,
  selectByFilters as select_products_filtered,
  updateFilters as action_products_updateFilters,
  selectFilters as select_products_filters,
  selectCategories as select_products_categories,
} from "./productsSlice";

export {
  addToCart as action_cart_add,
  selectAll as select_cart_all,
  removeFromCart as action_cart_remove,
  incrementQuantity as action_cart_incrementQuant,
  decrementQuantity as action_cart_decementQuant,
} from "./cartSlice";
