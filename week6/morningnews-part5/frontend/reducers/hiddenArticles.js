import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: [],
};

export const hiddenArticlesSlice = createSlice({
	name: 'hiddenArticles',
	initialState,
	reducers: {
		addHiddenArticles: (state, action) => {
			state.value.push(action.payload);
		},

        removeAllHidden : (state) => {
			state.value = [];
		},
	
	},
});

export const { addHiddenArticles, removeAllHidden} = hiddenArticlesSlice.actions;
export default hiddenArticlesSlice.reducer;
