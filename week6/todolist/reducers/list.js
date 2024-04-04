import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 value: [],
};

export const listSlice = createSlice({
 name: 'list',

  initialState,
 reducers: {
   addListToStore: (state, action) => {
     state.value.push(action.payload);
   },
 },
});

export const { addListToStore } = listSlice.actions;
export default listSlice.reducer;