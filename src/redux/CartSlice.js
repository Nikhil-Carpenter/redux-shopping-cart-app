import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name:'myCart',
    initialState:{
        value:[]
    },
    reducers:{
        addItem:(state,action)=>{
            var productData = action.payload;
            state.value = [...state.value,{productData,qty:1}]
        },
        incrementQty:(state,action)=>{
            var id = action.payload;
            state.value = state.value.map((obj)=>obj.productData.id == id ? {...obj,qty:obj.qty+1}:obj)
        },
        decrementQty:(state,action)=>{
            var id = action.payload;
            state.value = state.value.map((obj)=>obj.productData.id == id ? {...obj,qty:obj.qty-1}:obj)
        },
        removeItem:(state,action)=>{
            var id = action.payload;
            state.value = state.value.filter(obj=>obj.productData.id != id)
        }
    }
})

export const {addItem,incrementQty,decrementQty,removeItem} = CartSlice.actions
export default CartSlice.reducer