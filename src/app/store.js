import { configureStore } from '@reduxjs/toolkit';
import studentIdReducer from './studentIdSlice';
const store = configureStore({
	reducer: {
		studentId: studentIdReducer,
	},
});

export default store;
