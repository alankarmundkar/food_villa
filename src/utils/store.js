import {configureStore} from '@reduxjs/toolkit'
import cartSlice from './cartSlice'

const store = configureStore({
    reducer: {
        cart: cartSlice
    }
})

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



