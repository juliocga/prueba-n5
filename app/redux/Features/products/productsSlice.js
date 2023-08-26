import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {

    setAddItemsState(state, action) {
      return [...state, action.payload];
    },

    setOverwriteItemsState(state, action) {
      return [...action.payload];
    },

    resetItemsState(){
      return initialState
    },

  },
});

export const { setAddItemsState, resetItemsState, setOverwriteItemsState } = productsSlice.actions;

export const selectProductsState = (state) => state.products;

export default productsSlice.reducer;