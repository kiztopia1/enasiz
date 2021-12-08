import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios'

export const loadTokens = createAsyncThunk(
    'tokens/loadTokens',
    async () => {
        console.log('aha')
        axios.get('http://localhost:4000/tokens/').then(res => {
            return res.body;
        })
         
    }
  );
const tokenSlice = createSlice({
    name: 'tokens',
    initialState: [],
    reducers: {
        createToken: (state, action) => {
            const newToken ={
                id: Date.now(),
                name: action.payload.name,
                amount: action.payload.amount
            }
            state.push(newToken)
        }
    },
    extraReducers: (builder) => {
    builder
      .addCase(loadTokens.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loadTokens.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value += action.payload;
      });
  },
})
// selectors
export const selectTokens = (state) => state.tokens


// actions
export const {createToken} = tokenSlice.actions;


// reducer
export default tokenSlice.reducer;