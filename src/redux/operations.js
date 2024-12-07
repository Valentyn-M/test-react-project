import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Встановлюємо базову URL-адресу для всіх запитів axios
axios.defaults.baseURL = 'https://62584f320c918296a49543e7.mockapi.io';

export const fetchTasks = createAsyncThunk(
	'tasks/fetchAll',
	// Колбек-функція, в якій виконується запит, називається payloadCreator і відповідає за формування значення для властивості payload. Вона буде викликана з двома аргументами: arg та thunkAPI.
	// Використовуємо символ підкреслення як ім'я першого параметра, тому що в цій операції він нам не потрібен
	async (_, thunkAPI) => {
		try {
			const response = await axios.get('/tasks');
			// При успішному запиті повертаємо проміс із даними
			return response.data;
		} catch (e) {
			// При помилці запиту повертаємо проміс, який буде відхилений з текстом помилки
			return thunkAPI.rejectWithValue(e.message);
		}
	}
);

export const addTask = createAsyncThunk(
	'tasks/addTask',
	async (text, thunkAPI) => {
		try {
			const response = await axios.post('/tasks', { text });
			return response.data;
		} catch (e) {
			return thunkAPI.rejectWithValue(e.message);
		}
	}
);

export const deleteTask = createAsyncThunk(
	'tasks/deleteTask',
	async (taskId, thunkAPI) => {
		try {
			const response = await axios.delete(`/tasks/${taskId}`);
			return response.data;
		} catch (e) {
			return thunkAPI.rejectWithValue(e.message);
		}
	}
);

export const toggleCompleted = createAsyncThunk(
	'tasks/toggleCompleted',
	async (task, thunkAPI) => {
		try {
			const response = await axios.put(`/tasks/${task.id}`, {
				completed: !task.completed,
			});
			return response.data;
		} catch (e) {
			return thunkAPI.rejectWithValue(e.message);
		}
	}
);

