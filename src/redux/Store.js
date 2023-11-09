import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./CartSlice";

const store = configureStore({
    reducer:{
        carts:cartReducer
    }
})

export default store;