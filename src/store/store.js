import { configureStore } from "@reduxjs/toolkit";
// import contactSlice from "../screens/Contact/contactSlice/contactSlice";
import contactSlice from "../screens/Contact/contactSlice/contactSlice";
export const store = configureStore({
    reducer:{
        contact : contactSlice
    }
})