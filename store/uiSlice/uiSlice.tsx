import { createSlice } from "@reduxjs/toolkit";
import {UI} from "../../constans";

export interface MyUiState {
	firstPlayerPoints: number;
	secondPlayerPoints: number;
}

const initialUiState = {
	firstPlayerPoints: 0,
	secondPlayerPoints: 0,
} as MyUiState;

const uiSlice = createSlice({
	name: UI,
	initialState: initialUiState,
	reducers: {
		updateScore(state, action) {},
	},
});

export const { updateScore } = uiSlice.actions;
export const uiSliceReducer = uiSlice.reducer;
