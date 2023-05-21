import { createSlice } from "@reduxjs/toolkit";

/*
cart object prototype:
{
    id: number,
    quantity: number
}
*/

const cartslice = createSlice({
  initialState: { cart: [] },
  name: "cart",
  reducers: {
    addToCart: (state, action) => {
      console.log(action.payload);
      if (!state.cart.some((item) => item.id === action.payload.id)) {
        state.cart.push({ id: action.payload.id, quantity: 1 });
      }
    },
  },
});

export const selectAll = (state) => {
  let result = [...state.cart.cart];
  result = result.map((item) => ({
    ...item,
    ...state.products.productList.find((e) => e.id === item.id),
  }));

  return result;
};

export default cartslice.reducer;
export const { addToCart } = cartslice.actions;
