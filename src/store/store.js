import { configureStore } from "@reduxjs/toolkit";
import  inputReducers from "./features/inputSlice";
import  tableReducers from "./features/tableSlice";

export const store =configureStore({
    reducer:{
        input:inputReducers,
        table:tableReducers
    }
})


