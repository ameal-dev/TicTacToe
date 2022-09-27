import { createSlice } from "@reduxjs/toolkit";
import { isGameOver } from "../utils/isGameOver";

interface GameState {
	board: string[];
	isGameOver: boolean;
	firstPlayer: boolean;
	firstPlayerPoints: number;
	secondPlayerPoints: number;
	winIdx: number[] | undefined;
}

const initalGameState = {
	board: new Array(9).fill(""),
	isGameOver: false,
	firstPlayer: true,
	firstPlayerPoints: 0,
	secondPlayerPoints: 0,
	winIdx: undefined,
} as GameState;

const gameSlice = createSlice({
	name: "game",
	initialState: initalGameState,
	reducers: {
		markSquare(state, action) {
			const square = action.payload.square;
			const playerTurn = state.firstPlayer;
			const validSquare = state.board[square] === "";
			if (validSquare) {
				//!update state/board based on player marking the square
				if (playerTurn) {
					state.board[square] = "O";
				} else {
					state.board[square] = "X";
				}
				//!announce game over if a player wins as a result
				if (isGameOver(state.board).isGameOver) {
					state.isGameOver = true;
					state.winIdx = isGameOver(state.board).winningSquares;
					playerTurn ? state.firstPlayerPoints++ : state.secondPlayerPoints++;
				} else {
					//!otherwise change playerTurn
					state.firstPlayer = !playerTurn;
				}
			}
		},
		resetBoard(state) {
			state.board.fill("");
			state.isGameOver = false;
			state.winIdx = undefined;
		},
	},
});

export const gameSliceReducer = gameSlice.reducer;
export const { markSquare, resetBoard } = gameSlice.actions;
