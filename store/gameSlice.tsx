import { createSlice } from "@reduxjs/toolkit";

export interface GameState {
	board: string[];
	gameOver: boolean;
	firstPlayer: boolean;
}

const initalGameState = {
	board: new Array(9).fill(""),
	gameOver: false,
	firstPlayer: true,
} as GameState;

const isGameOver = (board: string[]) => {
	let gameOver = false;
	const firstRow = board[0] + board[1] + board[2];
	const secondRow = board[3] + board[4] + board[5];
	const thirdRow = board[6] + board[7] + board[8];
	const firstCol = board[0] + board[3] + board[6];
	const secondCol = board[1] + board[4] + board[7];
	const thirdCol = board[2] + board[5] + board[8];
	const topLeftBottomRight = board[0] + board[4] + board[8];
	const topRightBottomLeft = board[2] + board[4] + board[6];

	if (
		firstRow === "XXX" ||
		secondRow === "XXX" ||
		thirdRow === "XXX" ||
		firstCol === "XXX" ||
		secondCol === "XXX" ||
		thirdCol === "XXX" ||
		topLeftBottomRight === "XXX" ||
		topRightBottomLeft === "XXX"
	) {
		gameOver = true;
	}
	if (
		firstRow === "OOO" ||
		secondRow === "OOO" ||
		thirdRow === "OOO" ||
		firstCol === "OOO" ||
		secondCol === "OOO" ||
		thirdCol === "OOO" ||
		topLeftBottomRight === "OOO" ||
		topRightBottomLeft === "OOO"
	) {
		gameOver = true;
	}
	return gameOver;
};

const gameSlice = createSlice({
	name: "game",
	initialState: initalGameState,
	reducers: {
		markSquare(state, action) {
			const square = action.payload.square;
			const playerTurn = state.firstPlayer;
			const validSquare = state.board[square] === "";
			if (validSquare) {
				if (playerTurn) {
					state.board[square] = "O";
				} else {
					state.board[square] = "X";
				}
				if (isGameOver(state.board)) {
					console.log(
						`Game Over! ${playerTurn ? "First Player" : "Second Player"} Wins!`
					);
				} else {
					state.firstPlayer = !playerTurn;
				}
			}
			//update state/board based on player marking the square
			//announce game over if a player wins as a result
			//otherwise change playerTurn
		},
	},
});

export const gameSliceReducer = gameSlice.reducer;
export const { markSquare } = gameSlice.actions;
