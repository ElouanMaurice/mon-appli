import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 value: [],
};

export const bookmarksSlice = createSlice({
 name: 'bookmarks',

  initialState,
 reducers: {
   addBookmarksToStore: (state, action) => {
    state.value.push(action.payload);     
   },

 
 },
});

export const { addBookmarksToStore } = bookmarksSlice.actions;
export default bookmarksSlice.reducer;