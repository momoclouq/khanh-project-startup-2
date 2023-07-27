
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import cartReducer, { getTotals } from "../features/cartSlice"
import productsReducer, { productsFetch } from '../features/productSlice'
import { apiSlice } from 'features/auth/apiSlice'
import authReducer from '../features/auth/authSlice'

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,

  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true
  
})

store.dispatch(productsFetch())
store.dispatch(getTotals());