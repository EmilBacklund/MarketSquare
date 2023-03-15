import { createSlice } from '@reduxjs/toolkit';

// Slice
// name
// initial state

const listingsSlice = createSlice({
  name: 'listings',
  initialState: {
    products: [],
    total: 0,
    limit: 0,
  },
  reducers: {
    // Here we declare the functions which amend our state
    SET_PRODUCTS: (state, action) => {
      state.products = action.payload;
    },
  },
});

export default listingsSlice.reducer;

// Actions // API calls etc NB: //! We don't change the state here
const { SET_PRODUCTS } = listingsSlice.actions;

export const fetchProducts = () => async (dispatch) => {
  try {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    console.log(data.products);

    dispatch(SET_PRODUCTS(data.products));
  } catch (e) {
    //handle any errors that occur during the API call
    return console.error(e);
  }
};
