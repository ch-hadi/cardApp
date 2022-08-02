import {createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const ContactForm = createAsyncThunk('contact/user', async(ThunkApi)=>{
    try {
        console.log('in Thunk API ')
        return 'Anum Hammad'
    } catch (error) {
        return error
    }
})

export const contactSlice = createSlice({
    name : 'contact',
    initialState:{
        name:'',
        email:'',
        message:''
    },
    extraReducers:(builder)=>{
        builder.addCase(ContactForm.fulfilled, (state , action)=>{
            console.log(action.payload)
        })
    }
})

export default contactSlice.reducer