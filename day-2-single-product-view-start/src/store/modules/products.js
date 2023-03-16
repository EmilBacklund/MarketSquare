import { createSlice } from '@reduxjs/toolkit';

// Slice
// name
// initial state
// reducers // those are the functions which amend of change the state

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    singleProduct: null,
    total: 0,
  },
  reducers: {
    // Here we declare the functions which amend our state
    SET_PRODUCTS: (state, action) => {
      // state is the current state at this time - action: it will have the new state we get from the API call for example
      state.products = action.payload;
    },
    SET_SINGLE_PRODUCT: (state, action) => {
      state.singleProduct = action.payload;
    },
  },
});

export default productsSlice.reducer;

// Actions // API calls etc. NB: ***** WE DON'T CHANGE THE STATE HERE ******
const { SET_PRODUCTS } = productsSlice.actions;
const { SET_SINGLE_PRODUCT } = productsSlice.actions;

// fetch all products
export const fetchProducts = () => async (dispatch) => {
  try {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    console.log(data.products);

    dispatch(SET_PRODUCTS(data.products));
  } catch (e) {
    // handle any errors that occur during the API call fetch products
    return console.error(e);
  }
};

// fetch single product
export const fetchSingleProduct = (id) => async (dispatch) => {
  try {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const singleData = await response.json();
    console.log('singleData:', singleData);

    dispatch(SET_SINGLE_PRODUCT(singleData));
  } catch (e) {
    return console.error(e);
  }
};
