import { createSlice } from '@reduxjs/toolkit';

const profileSlice = createSlice({
	name: 'profile',
	initialState: [],
	reducers: {
		addProfile(state, action) {
			state.push(action.payload);
		},
		removeProfile(state, action) {
			state.splice(action.payload, 1);
		},
	},
});
const { actions, reducer } = profileSlice;
export const { addProfile, removeProfile } = actions;
export default reducer;
