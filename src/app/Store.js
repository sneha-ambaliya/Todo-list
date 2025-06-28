import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../feture/TodoSlice";

export const store = configureStore ({
    reducer:todoReducer
})