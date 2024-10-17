import { createSlice } from "@reduxjs/toolkit";

const cartSlice =createSlice({
    name:"cart",
    initialState:{
        items:[]// 
    },
    reducers:{
        // actionItem:reducerFunction(state,action){}
        addItem:(state,action)=>{
            // logic to add up to cart
            // push method
            // state >> InitialSatte
            // action.payload >> 
            state.items.push(action.payload)
        },
        clearCart:(state,action)=>{
            //logic to empty cart
            state.items=[]
        },
        removeLastItem:(state,action)=>{
            //pop()
            state.items.pop();
        }
    }

})
export const {addItem,clearCart,removeLastItem}=cartSlice.actions
export default cartSlice.reducer