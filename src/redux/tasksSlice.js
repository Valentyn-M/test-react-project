// 1. Імпортуємо функцію createAction
import { createSlice } from '@reduxjs/toolkit';

// Функція createSlice автоматично створює фабрики екшенів по назвам властивостей у полі reducers і додає їх на об’єкт слайсу у властивість actions. 
// Це означає, що нам більше не потрібно вручну їх оголошувати.
const slice = createSlice({
	// Ім'я слайсу
	// Властивість name визначає ім'я слайсу, яке додаватиметься як приставка під час створення екшенів, оголошених у властивості reducers. 
	// Так ми отримаємо екшени з типами tasks/addTask, tasks/deleteTask та tasks/toggleCompleted.
	name: 'tasks',
	// Початковий стан редюсера слайсу
	initialState: {
		items: [
			{ id: 0, text: 'Learn HTML and CSS', completed: true },
			{ id: 1, text: 'Get good at JavaScript', completed: true },
			{ id: 2, text: 'Master React', completed: false },
			{ id: 3, text: 'Discover Redux', completed: false },
			{ id: 4, text: 'Build amazing apps', completed: false },
		],
	},
	// Об'єкт case-редюсерів
	// У властивості reducers оголошуються case-редюсери - функції, які визначають, як змінювати стан слайсу у відповідь на певний екшен (action). 
	// Кожен case-редюсер відповідає за один конкретний екшен і змінює стан
	reducers: {
		addTask(state, action) {
			// ✅ Immer замінить це на операцію оновлення
			state.items.push(action.payload);
		},
		deleteTask(state, action) {
			// ✅ Immer замінить це на операцію оновлення
			state.items = state.items.filter(item => item.id !== action.payload);
		},
		toggleCompleted(state, action) {
			// ✅ Immer замінить це на операцію оновлення
			for (const task of state.items) {
				if (task.id === action.payload) {
					task.completed = !task.completed;
					break;
				}
			}
		},
	},
});

// Експортуємо фабрики екшенів
export const { addTask, deleteTask, toggleCompleted } = slice.actions;

// Експортуємо редюсер слайсу
// У властивість reducer зберігається редюсер слайсу який експортуємо із файла і передаємо при створенні стора.
export default slice.reducer;
