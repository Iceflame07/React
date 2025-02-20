import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice/counterSlice";

export const store = configureStore({
    reducer:{
        counter: counterReducer,
    }
})