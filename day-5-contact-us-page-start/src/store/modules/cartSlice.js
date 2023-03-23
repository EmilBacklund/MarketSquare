import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    productsInCart: [],
    numberOfProductsInCart: 0,
  },
  reducers: {
    // here we write the functions which will update the state
    ADD_PRODUCT_TO_CART: (state, action) => {
      // TODO i will update my productsInCart
      console.log('action: ', action);
      state.productsInCart = [...state.productsInCart, action.payload];
      state.numberOfProductsInCart = state.productsInCart.length;
    },
    REMOVE_SINGLE_PRODUCT: (state, action) => {
      console.log(state, action);

      state.numberOfProductsInCart = state.productsInCart.length;
    },
  },
});

export default cartSlice.reducer;

// Actions
const { ADD_PRODUCT_TO_CART, REMOVE_SINGLE_PRODUCT } = cartSlice.actions;

export const addSingleProductToCart = (productData) => (dispatch) => {
  console.log('productData: ', productData);
  dispatch(ADD_PRODUCT_TO_CART(productData));
  // API CALL TO add product to the user cart in the BE
};

export const removeSingleProductFromCart = (productId) => (dispatch) => {
  console.log(productId);
  dispatch(REMOVE_SINGLE_PRODUCT(productId));
};
