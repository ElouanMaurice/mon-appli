import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: { nickname: null, cities: [] },  };
  

export const userSlice = createSlice({
 name: 'user',

  initialState,
 reducers: {
   addUserToStore: (state, action) => {
    state.value.nickname = action.payload.nickname;
   },

   addCity: (state, action) => {
    state.value.cities.push(action.payload);
   },
   addCityDelete: (state, action) => {
    state.value.cities  = state.value.cities.filter(city => city.name !== action.payload.cityName);  
    },
			
		
 },
});

export const { addUserToStore, addCity, addCityDelete } = userSlice.actions;
export default userSlice.reducer;