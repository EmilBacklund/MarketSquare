// this will help you create the redux store
import { configureStore } from '@reduxjs/toolkit';
// it will help you combine all your modules E.G(products, productDetails)
import { combineReducers } from '@reduxjs/toolkit';
import listings from './modules/listings';

// Here I am combining my modules
const reducer = combineReducers({
  //I will list my modules
  listings,
});

// Here I am creating my store
const index = configureStore({
  reducer,
});

export default index;
