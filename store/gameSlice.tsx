import { createSlice } from "@reduxjs/toolkit";

export interface GameState {
	board: [string[], string[], string[]];
	gameOver: boolean;
	firstPlayersTurn: boolean;
}

const initalGameState = {
	board: [
		new Array(3).fill(undefined),
		new Array(3).fill(undefined),
		new Array(3).fill(undefined),
	],
	gameOver: false,
	firstPlayersTurn: true,
} as GameState;

const gameSlice = createSlice({
	name: "game",
	initialState: initalGameState,
	reducers: {
		markSquare(state, action) {
			//update state/board based on action.payload
			//update state.gameOver if game is over
			//update state.firstPlayersTurn
		},
	},
});

export const gameSliceReducer = gameSlice.reducer;
export const { markSquare } = gameSlice.actions;
