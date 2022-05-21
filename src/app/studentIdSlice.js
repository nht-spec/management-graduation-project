import { createSlice } from '@reduxjs/toolkit';

const studentIdSlice = createSlice({
	name: 'studentId',
	initialState: [],
	reducers: {
		addStudentId(state, action) {
			state = action.payload != undefined ? action.payload : '';
			return state;
		},
		// removeProfile(state, action) {
		// 	state.splice(action.payload, 1);
		// },
	},
});
const { actions, reducer } = studentIdSlice;
export const { addStudentId } = actions;
export default reducer;
