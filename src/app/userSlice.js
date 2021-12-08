import {  createSlice } from '@reduxjs/toolkit';


export const counterSlice = createSlice({
    name: 'user',
    initialState: {
      username:'login',
      id: ''
    },
    reducers: {
      login: (state, action) => {

        state.username = action.payload.username
        state.id = action.payload.id
        console.log(state.name,action.payload, 'boom')
      },
      logout: (state) => {
        state.user = null
      },
    }
  });

  export const { login, logout } = counterSlice.actions;
  export const selectUser = (state) => state.user;
  
  export default counterSlice.reducer