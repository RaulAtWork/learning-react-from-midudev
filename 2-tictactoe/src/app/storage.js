import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialGrid = {
  1: "",
  2: "",
  3: "",
  4: "",
  5: "",
  6: "",
  7: "",
  8: "",
  9: "",
};

const gridSlice = createSlice({
  name: "grid",
  initialState: initialGrid,
  reducers: {
    resetGrid(state) {
      state = initialGrid;
    },
    updateTile(state, action) {
      state[action.payload.index] = action.payload.value;
    },
  },
});

const store = configureStore({
  reducer: {
    grid: gridSlice.reducer,
  },
});

export default store;
