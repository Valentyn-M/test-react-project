import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlice';
import filtersReducer from './filtersSlice';

// Код оголошення редюсерів слайсів
export const store = configureStore({
	reducer: {
		tasks: tasksReducer,
		filters: filtersReducer,
	}
});
