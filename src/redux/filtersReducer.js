// 1. Імпортуємо функцію createAction
import { createAction } from '@reduxjs/toolkit';

// 2. Створюємо фабрики екшенів
export const setStatusFilter = createAction('filters/setStatusFilter');

// Початковий стан слайса
const initialState = {
	status: 'all',
};

// Експортуємо редюсер слайса
export default function filtersReducer(state = initialState, action) {
	switch (action.type) {
		case 'filters/setStatusFilter':
			return {
				...state,
				status: action.payload,
			};

		default:
			return state;
	}
};