import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    itemsInCart: [],
    itemCounter: 0,
  },
  reducers: {
    // here we write the functions that will update the state
    ADD_ITEM_TO_CART: (state, action) => {
      console.log(action);
      state.itemsInCart = [...state.itemsInCart, action.payload];
      state.itemCounter = state.itemsInCart.length;
    },
  },
});

export default cartSlice.reducer;

const { ADD_ITEM_TO_CART } = cartSlice.actions;

export const addSingleItemToCart = (itemData) => (dispatch) => {
  console.log(itemData);
  dispatch(ADD_ITEM_TO_CART(itemData));
};
