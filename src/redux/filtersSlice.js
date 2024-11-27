import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
	name: "filters",
	initialState: {
		status: "all",
	},
	reducers: {
		setStatusFilter(state, action) {
			// ✅ Immer замінить це на операцію оновлення
			state.status = action.payload;
		},
	},
});


// Експортуємо фабрики екшенів
export const { setStatusFilter } = slice.actions;

// Експортуємо редюсер слайсу
export default slice.reducer;