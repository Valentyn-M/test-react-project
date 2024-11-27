import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksReducer';
import filtersReducer from './filtersReducer';

// Код оголошення редюсерів слайсів
export const store = configureStore({
	reducer: {
		tasks: tasksReducer,
		filters: filtersReducer,
	}
});
