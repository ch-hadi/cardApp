import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
const persons = [
  // {
  //   id: '1',
  //   name: [
  //     '1-2 CARDS: Add $3.75 For Return Shipping',
  //     '20-25 CARDS:Add $14.99 For Return Shipping',
  //     '1-2 CARDS: Add $3.75 For Return Shipping',
  //     '20-25 CARDS:Add $14.99 For Return Shipping',
  //   ],
  //   price: '12.00',
  //   additionWithPrice: 'Per Card + Shipping',
  //   priceSubHeading: 'CSG GRADING SERVICE',
  //   priceSubHeading3: '($2 Per Auto /$15 Gaming Trading Cards)',
  //   Color: '#F3B007',
  //   Content:
  //     '*CARDS MUST BE $999 OR LESS IN VALUE FOR ECONOMY, BETWEEN $1,000 AND $1,499 FOR REGULAR, AND BETWEEN $1,500 AND $2,499 FOR EXPRESS. YOU MUST SEPARATE YOUR CARDS INTO CATEGORIES FOR THE VALUE GRADING SERVICE, LISTED IN STEP 2 BELOW. THE PENNY SLEEVES AND GRADING CARD SAVER UNDER VIP PACKAGE! (.75 CENT CHARGE PER CARD)',
  // },
  {
    id: '1',
    price: '12.00',
    name: [
        '1-2 CARDS: Add $3.75 For Return Shipping',
        '20-25 CARDS:Add $14.99 For Return Shipping',
        '1-2 CARDS: Add $3.75 For Return Shipping',
        '20-25 CARDS:Add $14.99 For Return Shipping',
      ],
    additionWithPrice: 'Per Card + Shipping',
    priceSubHeading: 'CSG GRADING SERVICE',
    priceSubHeading3: '($12 Per Auto /$15 Gaming Trading Cards)',
    Content:
      '*CARDS MUST BE $999 OR LESS IN VALUE FOR ECONOMY, BETWEEN $1,000 AND $1,499 FOR REGULAR, AND BETWEEN $1,500 AND $2,499 FOR EXPRESS. YOU MUST SEPARATE YOUR CARDS INTO CATEGORIES FOR THE VALUE GRADING SERVICE, LISTED IN STEP 2 BELOW.YOU DO NOT HAVE THE PROPER TOP LOADER PSA REQUIRES, WE WILL PROVIDE THE PENNY SLEEVES AND GRADING CARD SAVER UNDER VIP PACKAGE! (.75 CENT CHARGE PER CARD)',
    //   bgColor:'#2240FF'
  },
  {
    id: '2',
    price: '48.00',
    name: [
        '1-2 CARDS: Add $3.75 For Return Shipping',
        '20-25 CARDS:Add $14.99 For Return Shipping',
        '1-2 CARDS: Add $3.75 For Return Shipping',
        '20-25 CARDS:Add $14.99 For Return Shipping',
      ],
    additionWithPrice: 'Per Card + Shipping',
    priceSubHeading: 'CSG GRADING SERVICE',
    priceSubHeading3: '($12 Per Auto /$15 Gaming Trading Cards)',
    Content:
      '*CARDS MUST BE $999 OR LESS IN VALUE FOR ECONOMY, BETWEEN $1,000 AND $1,499 FOR REGULAR, AND BETWEEN $1,500 AND $2,499 FOR EXPRESS. YOU MUST SEPARATE YOUR CARDS INTO CATEGORIES FOR THE VALUE GRADING SERVICE, LISTED IN STEP 2 BELOW.YOU DO NOT HAVE THE PROPER TOP LOADER PSA REQUIRES, WE WILL PROVIDE THE PENNY SLEEVES AND GRADING CARD SAVER UNDER VIP PACKAGE! (.75 CENT CHARGE PER CARD)',
    //   bgColor:'#2240FF'
  },
  {
    id: '3',
    price: '95.00',
    name: [
        '1-2 CARDS: Add $3.75 For Return Shipping',
        '20-25 CARDS:Add $14.99 For Return Shipping',
        '1-2 CARDS: Add $3.75 For Return Shipping',
        '20-25 CARDS:Add $14.99 For Return Shipping',
      ],
    additionWithPrice: 'Per Card + Shipping',
    priceSubHeading: 'CSG GRADING SERVICE',
    priceSubHeading3: '($2 Per Auto /$15 Gaming Trading Cards)',
    Content:
      '*CARDS MUST BE $999 OR LESS IN VALUE FOR ECONOMY, BETWEEN $1,000 AND $1,499 FOR REGULAR, AND BETWEEN $1,500 AND $2,499 FOR EXPRESS. YOU MUST SEPARATE YOUR CARDS INTO CATEGORIES FOR THE VALUE GRADING SERVICE, LISTED IN STEP 2 BELOW.YOU DO NOT HAVE THE PROPER TOP LOADER PSA REQUIRES, WE WILL PROVIDE THE PENNY SLEEVES AND GRADING CARD SAVER UNDER VIP PACKAGE! (.75 CENT CHARGE PER CARD)',
    bgColor: '#2240FF',
  },
  {
    id: '4',
    price: '165.00',
    name: [
        '1-2 CARDS: Add $3.75 For Return Shipping',
        '20-25 CARDS:Add $14.99 For Return Shipping',
        '1-2 CARDS: Add $3.75 For Return Shipping',
        '20-25 CARDS:Add $14.99 For Return Shipping',
      ],
    additionWithPrice: 'Per Card + Shipping',
    priceSubHeading: 'CSG GRADING SERVICE',
    priceSubHeading3: '($23 Per Auto /$15 Gaming Trading Cards)',
    Content:
      '*CARDS MUST BE $100 OR LESS IN VALUE FOR ECONOMY, BETWEEN $1,000 AND $1,499 FOR REGULAR, AND BETWEEN $1,500 AND $2,499 FOR EXPRESS. YOU MUST SEPARATE YOUR CARDS INTO CATEGORIES FOR THE VALUE GRADING SERVICE, LISTED IN STEP 2 BELOW.YOU DO NOT HAVE THE PROPER TOP LOADER PSA REQUIRES, WE WILL PROVIDE THE PENNY SLEEVES AND GRADING CARD SAVER UNDER VIP PACKAGE! (.75 CENT CHARGE PER CARD)',
    bgColor: '#2240FF',
  },
];
const gradingSlice = createSlice({
  name: 'gradingSlice',
  initialState: {
    persons: persons,
  },
  extraReducers: builder => {},
});

export default gradingSlice.reducer;
