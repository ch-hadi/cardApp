import { configureStore } from "@reduxjs/toolkit";
// import contactSlice from "../screens/Contact/contactSlice/contactSlice";
import contactSlice from "../screens/Contact/contactSlice/contactSlice";
import homeSlice from "../screens/Home/homeSlice/homeSlice";
import gradingSlice from "../screens/Grading/gradingSlice/gradingSlice";

export const store = configureStore({
    reducer:{
        contact : contactSlice,
        onlineStoreData:homeSlice,
        Grading : gradingSlice
    }
})