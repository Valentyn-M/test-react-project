// 1. Імпортуємо функцію createAction
import { createAction } from "@reduxjs/toolkit";

// 2. Створюємо фабрики екшенів
export const addTask = createAction('tasks/addTask');
export const deleteTask = createAction('tasks/deleteTask');
export const toggleCompleted = createAction('tasks/toggleCompleted');

// Початковий стан слайса
const initialState = {
	items: [
		{ id: 0, text: 'Learn HTML and CSS', completed: true },
		{ id: 1, text: 'Get good at JavaScript', completed: true },
		{ id: 2, text: 'Master React', completed: false },
		{ id: 3, text: 'Discover Redux', completed: false },
		{ id: 4, text: 'Build amazing apps', completed: false },
	],
};

// 3. Експортуємо редюсер слайса
// Використовуємо initialState як значення стану за умовчанням
export default function tasksReducer(state = initialState, action) {
	// Редюсер розрізняє екшени за значенням властивості type
	switch (action.type) {
		// Залежно від типу екшену виконуватиметься різна логіка
		// Кожен редюсер отримує всі екшени, відправлені в стор.
		case 'tasks/addTask': {
			// Потрібно повернути копію об'єкту поточного стану в якому є всі дані існуючого стану
			return {
				...state,
				// та новий масив задач в якому є всі існуючі завдання та об'єкт нового завдання
				items: [...state.items, action.payload],
			};
		}

		case 'tasks/deleteTask':
			return {
				...state,
				items: state.items.filter((task) => task.id !== action.payload),
			};

		case 'tasks/toggleCompleted':
			return {
				...state,
				items: state.items.map((task) => {
					if (task.id !== action.payload) {
						return task;
					}
					return {
						...task,
						completed: !task.completed,
					};
				}),
			};

		// Якщо редюсер не повинен обробляти якийсь тип екшену, необхідно повернути наявний стан без змін.
		default:
			return state;
	}
};