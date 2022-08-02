import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";


// const getData = createAsyncThunk('dummy-data/data' , async()=>{

// })

const homeSlice = createSlice({
    name : 'homeSlice',
    initialState:{
        onlineStoreData:[
            {
                id: 1,
                buttonTitle: 'Check Ebay Store',
                title: 'Test Card',
                source: require('../../../../assets/images/sc1.png'),
              },
              {
                id: 2,
                buttonTitle: 'Google Store',
                title: 'Common Card',
                source: require('../../../../assets/images/sc1.png'),
              },
              {
                id: 3,
                buttonTitle: 'Card Express',
                title: 'Most Popular Cards',
                source: require('../../../../assets/images/sc1.png'),
              },
              {
                id: 4,
                buttonTitle: 'Check Ebay Store',
                title: 'Common Card',
                source: require('../../../../assets/images/sc1.png'),
              },
        ],
        checkStoreImages:[
            {
                id: 1,
                image: require('../../../../assets/images/sc1.png'),
              },
              {
                id: 2,
                name: 'Dog',
              },
              {
                id: 3,
                image: require('../../../../assets/images/sc1.png'),
              },
              {
                id: 4,
                image: require('../../../../assets/images/sc1.png'),
              },
              {
                id: 5,
                image: require('../../../../assets/images/sc1.png'),
              },
        ]
    },
    extraReducers: (builder)=>{}
})

export default homeSlice.reducer