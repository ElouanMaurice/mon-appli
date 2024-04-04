import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 value: 0,
};

export const counterSlice = createSlice({
 name: 'counter',

  initialState,
 reducers: {
   addMoinsToStore: (state) => {
     if(state.value > 0){
        state.value--;
     }

     console.log("soustraction: ", state.value)
   },

   addPlusToStore: (state) => {
    state.value++;
    console.log("addition: ", state.value)
  },
 },
});

export const { addMoinsToStore } = counterSlice.actions;
export const { addPlusToStore } = counterSlice.actions;
export default counterSlice.reducer;