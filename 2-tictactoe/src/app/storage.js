import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialGrid = {
  1: { key: 1, state: "" },
  2: { key: 2, state: "" },
  3: { key: 3, state: "" },
  4: { key: 4, state: "" },
  5: { key: 5, state: "" },
  6: { key: 6, state: "" },
  7: { key: 7, state: "" },
  8: { key: 8, state: "" },
  9: { key: 9, state: "" },
};

const gridSlice = createSlice({
  name: "grid",
  initialState: initialGrid,
  reducers: {
    resetGrid(state) {
      state = initialGrid;
    },
    updateTile(state, action) {
      state[action.payload.index].state = action.payload.state;
    },
  },
});

const store = configureStore({
  reducer: {
    grid: gridSlice.reducer,
  },
});

export default store;
export const { updateTile, resetGrid } = gridSlice.actions;
