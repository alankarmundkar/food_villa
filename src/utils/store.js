import {configureStore} from '@reduxjs/toolkit'
import cartSlice from './cartSlice'
import apiSlice from './apiSlice'
import {setupListeners} from '@reduxjs/toolkit/query'

const store = configureStore({
    reducer: {
        cart: cartSlice,
        [apiSlice.reducerPath]: apiSlice.reducer,
        // [deleteApiSlice.reducerPath]: deleteApiSlice.reducer  not recommended
    },
    middleware: (prevMiddlewares)=> prevMiddlewares().concat([apiSlice.middleware])
  
})
console.log(store,'store')
setupListeners(store.dispatch)

export default store

/**
 * Create Store
 *  configureStore() from RTK
 * 
 * Provider
 * 
 *<Provider store = {store}> </Provide>  import from react-redux
 Slice
  RTK 
  const cartSlice = createSlice({
    name : 'name'
    intialState: 
    reducers: {
        addItem: (state, action) => {

        }
    }
  })
  export default cartSlice.reducer

  export const {addItem } = cartSlice.actions

  Put Slice in the  store
  const store = configureStore({
    reducer: {
        cart: cartSlice,
        user: userSlice
    }
    })
 */



