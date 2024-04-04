import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 value: {
    isConnected: false,
    username: '',
 },
};

export const usersSlice = createSlice({
 name: 'user',

  initialState,
 reducers: {
   addUserToStore: (state, action) => {
    state.value.isConnected = true
    state.value.username = action.payload

   },

   addLogoutToStore: (state, action) => {
    state.value.isConnected = false
    state.value.username = ''

   }
 },
});

export const { addUserToStore, addLogoutToStore } = usersSlice.actions;
export default usersSlice.reducer;
