import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Books";
import allBookSlice from'./AllBooks'

const store =  configureStore({
    reducer:{
        cart:cartSlice,
        allBooks:allBookSlice
    }
})

export default store;