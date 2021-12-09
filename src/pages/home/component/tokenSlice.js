import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';



export const loadTokens = createAsyncThunk(
    'tokens/loadTokens',
    async () => {
        console.log('aha')
        fetch('http://localhost:4000/tokens/').then(res => {
            console.log(res, 'this is you think')
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
        },
        setToken: (state, action) => {
          state.push(action.payload)
        },
        setTokens: (state, action) => {
          action.payload.map(token => state.push(token))
        }
    },
    extraReducers: {
      [loadTokens.pending]: (state, action) => {
        state.tokens = 'loading';
      },
      [loadTokens.fulfilled]: (state, action) => {
        state.tokens += action.payload;
      },
      [loadTokens.rejected]: (state, action) => {
        console.log(state)
        
      }
  },
})
// selectors
export const selectTokens = (state) => state.tokens


// actions
export const {createToken, setTokens, setToken} = tokenSlice.actions;


// reducer
export default tokenSlice.reducer;