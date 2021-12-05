import { createSlice } from '@reduxjs/toolkit';

const tokenSlice = createSlice({
    name: 'tokens',
    initialState: [
    {id:'ks3h-33h-34sf-24-', name:'warZone',amount:1000},
    {id:'ks3h-33h-34sf-24-', name:'cod m',amount:1000}
    ],
    reducers: {
        createToken: (state, action) => {
            const newToken ={
                id: Date.now(),
                name: action.payload.name,
                amount: action.payload.amount
            }
            state.push(newToken)
        }
    }
})
// selectors
export const selectTokens = (state) => state.tokens


// actions
export const {createToken} = tokenSlice.actions;


// reducer
export default tokenSlice.reducer;