import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import qs from 'qs';
import { Linking } from 'react-native';
// import qs from 'querystring'
export const sendEmail = createAsyncThunk('send-email/contact', async(data)=>{

    const subject = 'Test Email'
    const body = 'this is test body'
    const {to ,cc} = data
    let url = `mailto:${to}`;
    
    // // Create email link query
    const query = qs.stringify({
        subject: subject,
        body: body,
        cc: cc,
        bcc: cc
    });

    if (query.length) {
        url += `?${query}`;
        // console.log(url)
    }
    // // check if we can use this link
    const canOpen = await Linking.openURL(url);   
    if (!canOpen) {
        throw new Error('Provided URL can not be handled');
    }
    return Linking.openURL(url);
})
