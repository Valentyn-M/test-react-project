import { createSlice } from '@reduxjs/toolkit';
import { fetchTasks, addTask, deleteTask, toggleCompleted } from './operations';

const handlePending = (state) => {
	state.isLoading = true;
};

const handleRejected = (state, action) => {
	state.isLoading = false;
	state.error = action.payload;
};

const tasksSlice = createSlice({
	name: 'tasks',
	initialState: {
		items: [],
		isLoading: false,
		error: null,
	},
	// Додаємо обробку зовнішніх екшенів
	// Властивість extraReducers використовується для оголошення редюсерів, які обробляють «зовнішні» екшени, тобто ті, що не створені через reducers
	// Це корисно для обробки екшенів із життєвим циклом запиту (pending, fulfilled, rejected), які автоматично створює createAsyncThunk.
	extraReducers: (builder) => {
		// Властивість reducers нам більше не потрібна, тому всю логіку обробки екшенів запиту переносимо до нових редюсерів.
		builder
			// Обробка екшену "Отримання всіх задач з бекенду та відображення" (одразу при завантаженні компоненту)
			.addCase(fetchTasks.pending, handlePending)
			.addCase(fetchTasks.fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = null;
				state.items = action.payload;
			})
			.addCase(fetchTasks.rejected, handleRejected)

			// Обробка екшену "Додати нове завдання"
			.addCase(addTask.pending, handlePending)
			.addCase(addTask.fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = null;
				state.items.push(action.payload);
			})
			.addCase(addTask.rejected, handleRejected)

			// Обробка екшену "Видалити завдання"
			.addCase(deleteTask.pending, handlePending)
			.addCase(deleteTask.fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = null;
				state.items = state.items.filter(
					(task) => task.id !== action.payload.id
				);
			})
			.addCase(deleteTask.rejected, handleRejected)

			// Обробка екшену "Перемкнути на Виконанно/Не виконано"
			.addCase(toggleCompleted.pending, handlePending)
			.addCase(toggleCompleted.fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = null;
				state.items = state.items.map((task) =>
					task.id === action.payload.id ? action.payload : task
				);
			})
			.addCase(toggleCompleted.rejected, handleRejected);
	},
});

export default tasksSlice.reducer;
