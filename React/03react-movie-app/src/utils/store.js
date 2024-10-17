import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './cartSlice'
export const store =configureStore({
    reducer:{
        cart:cartSlice
    }
})

// Steps:
// Configure ur store >>empty store
// Provide ur store to main.jsx
// create a slice for us >> cartSlice.js
// Add Slice Reducers to the Store