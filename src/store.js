import { configureStore } from "@reduxjs/toolkit";
import navbarSlice from "./components/navbarSlice";
const store  = configureStore({
    reducer:{
        navbar:navbarSlice
    }
})

export default store