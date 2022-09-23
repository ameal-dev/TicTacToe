import { createSlice } from "@reduxjs/toolkit";

export interface MyUiState {
	firstPlayerPoints: number;
	secondPlayerPoints: number;
}

const initialUiState = {
	firstPlayerPoints: 0,
	secondPlayerPoints: 0,
} as MyUiState;

const uiSlice = createSlice({
	name: "ui",
	initialState: initialUiState,
	reducers: {
		updateScore(state, action) {},
	},
});

export const { updateScore } = uiSlice.actions;
export const uiSliceReducer = uiSlice.reducer;
