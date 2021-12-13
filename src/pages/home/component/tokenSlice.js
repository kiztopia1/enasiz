import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';



export const loadTokens = createAsyncThunk(
    'tokens/loadTokens',
    async () => {
        fetch('http://localhost:4000/tokens/').then(res => {
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
          if (state.length == 0) {
            action.payload.map(token => state.push(token))
          }else{
            state = state.filter(token => token == 'null')
            action.payload.map(token => state.push(token))
          }
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
        
      }
  },
})
// selectors
export const selectTokens = (state) => state.tokens


// actions
export const {createToken, setTokens, setToken} = tokenSlice.actions;


// reducer
export default tokenSlice.reducer;